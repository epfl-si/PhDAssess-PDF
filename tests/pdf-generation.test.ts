import 'mocha'

const chai = require('chai')
chai.use(require('chai-fs'))
const assert = chai.assert
const expect = chai.expect

import {PDFInfo} from "pdfjs-dist/index";
const pdfjsLib = require("pdfjs-dist/legacy/build/pdf.js")

import type {PhDAssessVariables} from "phd-assess-meta/types/variables";
import {makePDFString} from "../src/makePDF"
import sampleData from "../src/sample.json"


describe('PDF as string generation result', () => {
  it('should generate the PDF', async () => {
    // 1. ARRANGE

    // 2. ACT
    const pdfGenerated = await makePDFString(sampleData as unknown as PhDAssessVariables)

    // 3. ASSERT

    // see samples https://github.com/mozilla/pdf.js/blob/master/examples/node/getinfo.js
    console.log("Loading the PDF from the b64 string...")

    const loadingTask = pdfjsLib.getDocument({ data: Buffer.from(pdfGenerated, 'base64') })
    const doc = await loadingTask.promise

    expect(doc).to.not.be.empty
    expect(doc.numPages).to.be.greaterThan(0)

    const data = await doc.getMetadata()
    const info = data.info as PDFInfo
    expect(info.Subject).to.equal("Annual report of 2nd year")

    // METADATA
    assert(info.Custom, `Can't find the activitylogs in ${JSON.stringify(info, null, 2)}`)
    expect(JSON.parse(info.Custom.activityLogs)[0]).to.include(
      {referrer: "http://localhost:3000/"}, `Can't find the referrer in the activity logs : ${info.Custom.activityLogs}`
    )

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

    console.log("looks all fine! You can find the resulted pdf into ./out")
  })
})
