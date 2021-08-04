import 'mocha'

const chai = require('chai')
chai.use(require('chai-fs'))
const assert = chai.assert
const expect = chai.expect

const appRoot = require('app-root-path')
import fs from "fs"

const sleep = require('util').promisify(setTimeout)

import makePDF from "../src/makePDF"
import sampleData from "../sample.json"

const pdfjsLib = require("pdfjs-dist/legacy/build/pdf.js")
const PDFDocumentProxy = require("pdfjs-dist")

describe('PDF generation result', () => {
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
    expect(outputFile).to.be.a.file()

    // see samples https://github.com/mozilla/pdf.js/blob/master/examples/node/getinfo.js
    console.log("Loading the PDF...")
    const loadingTask = pdfjsLib.getDocument(outputFile)
    const doc: typeof PDFDocumentProxy = await Promise.resolve(loadingTask.promise)

    expect(doc).to.not.be.empty
    expect(doc.numPages).to.be.greaterThan(0)

    const data = await doc.getMetadata()
    expect(data.info.Subject).to.equal("subject of document")

    // METADATA
    assert(data.info.Custom, `Can't find the activitylogs in ${JSON.stringify(data.info, null, 2)}`)
    expect(JSON.parse(data.info.Custom.activityLogs)[0]).to.include(
      {referrer: "http://localhost:3000/"}, `Can't find the referere in the activity logs : ${data.info.Custom.activityLogs}`
    )
  })
})
