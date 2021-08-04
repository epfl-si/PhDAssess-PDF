import 'mocha'
import {expect} from 'chai'

const chai = require('chai')
chai.use(require('chai-fs'))
//const assert = chai.assert
import fs from "fs"

var appRoot = require('app-root-path')
import makePDF from "/src/makePDF"
import sampleData from "../sample.json"
import {PDFDocumentProxy} from "pdfjs-dist/types/display/api"
import {TDocumentMetaInformation} from "/src/parts/meta"
import {dictKeysToLowerCase} from "./support/utils";

const pdfjsLib = require("pdfjs-dist/legacy/build/pdf.js")
const sleep = require('util').promisify(setTimeout)

describe('generatePDF()', () => {
  it('should generate the PDF', async () => {
    // 1. ARRANGE
    const outputFile = `${appRoot}/out/makePDF.pdf`

    if (fs.statSync(outputFile).isFile()) {
      try {
        console.log("Deleting existing pdf for building test...")
        fs.unlinkSync(outputFile)
        console.log("Deleted.")
      } catch (error) {
        console.log(error)
      }
    }

    // 2. ACT
    makePDF(sampleData)
    // generating the pdf take some times
    await sleep(500)

    // 3. ASSERT
    // @ts-ignore
    expect(outputFile).to.be.a.file()

    // see samples https://github.com/mozilla/pdf.js/blob/master/examples/node/getinfo.js
    console.log("Loading the PDF...")
    const loadingTask = pdfjsLib.getDocument(outputFile)
    const doc: PDFDocumentProxy = await Promise.resolve(loadingTask.promise)

    expect(doc).to.not.be.empty
    expect(doc.numPages).to.be.greaterThan(0)

    const data = await doc.getMetadata()
    //console.log(JSON.stringify(data, null, 2))
    // yep, don't know why all entries are first letter uppercase, that's a transform-fix
    const meta : TDocumentMetaInformation = dictKeysToLowerCase(data.info)
    expect(meta.subject).to.equal("subject of document")

    //assert(meta.activityLogs, `Can't find the activitylogs ? ${JSON.stringify(meta, null, 2)}`)
    //expect(meta.activityLogs).to.include( {referrer: "http://localhost:3000/"}, `Can't find the referere in activitylogs ? ${meta.activityLogs}`)
  })
})
