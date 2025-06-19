import 'mocha'

const chai = require('chai')
chai.use(require('chai-fs'))
const assert = chai.assert
const expect = chai.expect

import { getDocument } from "pdfjs-dist/legacy/build/pdf.mjs";

import type {PhDAssessVariables} from "phd-assess-meta/types/variables";
import {makePDFFile, makePDFString} from "../src/makePDF"


import sampleData from "../src/sample.json"
import samplePdfType from "../src/samplePdfType.json"

import {PDFDocumentProxy} from "pdfjs-dist";
import {mergePdfs} from "../src/mergePdfs";


describe('PDF generation tests', () => {
  let pdfGenerated: string | undefined
  let doc: PDFDocumentProxy | undefined

  before('should generate the PDF with sample data', async () => {
    pdfGenerated = await makePDFString(sampleData as unknown as PhDAssessVariables)

    assert.isString(pdfGenerated)
  })

  it('should be able to open the PDF in memory', async () => {
    // see samples https://github.com/mozilla/pdf.js/blob/master/examples/node/getinfo.js
    const buffer = Buffer.from(pdfGenerated!, 'base64')
    const pdfGeneratedUint8 = new Uint8Array(buffer)

    const loadingTask = getDocument({ data: pdfGeneratedUint8 })
    doc = await loadingTask.promise
  })

  it('should have some right content inside the PDF in memory', async () => {
    doc = doc!
    expect(doc).to.not.be.empty
    expect(doc.numPages).to.be.greaterThan(0)

    const data = await doc.getMetadata()
    const info:any = data.info
    expect(info.Subject).to.equal("Annual report of 2nd year")

    const pageNumber = 1
    const page = await doc.getPage(pageNumber)
    const content = await page.getTextContent()

    // Content contains lots of information about the text layout and
    // styles, but we need only strings at the moment
    const strings = content.items.map(function (item:any) {
      return item.str;
    });

    expect(strings.join("")).to.have.string("Name of candidate")
    expect(strings.join("")).to.have.string("Date of candidacy exam")
  })

  it('should be able to generate the PDF as file from sample data', async () => {
    makePDFFile(sampleData as unknown as PhDAssessVariables, samplePdfType)
  })

  it('should be able to merge two PDFs', async () => {
    const pdf1 = await makePDFString(sampleData as unknown as PhDAssessVariables, samplePdfType)
    const pdf2 = await makePDFString(sampleData as unknown as PhDAssessVariables, samplePdfType)

    // open one pdf to check how many pages for one pdf
    const buffer1 = Buffer.from(pdf1, 'base64')
    const pdf1GeneratedUint8 = new Uint8Array(buffer1)
    const pdf1Document = getDocument({ data: pdf1GeneratedUint8 })
    const pdf1Doc = await pdf1Document.promise
    const onePdfPageNumber = pdf1Doc.numPages

    const mergedPdfBase64 = await mergePdfs(pdf1, pdf2)

    const buffer = Buffer.from(mergedPdfBase64, 'base64')
    const pdfGeneratedUint8 = new Uint8Array(buffer)

    const loadingTask = getDocument({ data: pdfGeneratedUint8 })
    const mergedDoc = await loadingTask.promise

    expect(mergedDoc).to.not.be.empty
    expect(mergedDoc.numPages).to.be.greaterThan(onePdfPageNumber + 1)
  })

  after(async () => {
    console.log("\nlooks all fine! You can find the resulted pdf into ./out")
  })
})
