import PdfPrinter from 'pdfmake'
import fs from 'fs'
import {BufferOptions, TDocumentDefinitions} from "pdfmake/interfaces"
import getStream from 'get-stream'

import {defaultStyle, styles} from "./styles"
import getMetaData from "./parts/meta";
import getHeader from "./parts/header"
import getProvisional from "./parts/provisional"
import getMain from "./parts/main"
import getSectionA from "./parts/sectionA"
import getSectionB from "./parts/sectionB"
import getSectionC from "./parts/sectionC"
import getSectionCCommentsAll from "./parts/sectionCCommentsAll"
import getSectionCCommentsWithoutCommon from "./parts/sectionCCommentsWithoutCommon"
import getSectionD from "./parts/sectionD"
import getSectionDAgree from "./parts/sectionDAgree"
import getFooter from "./parts/footer"
import {IInputVariables} from "zeebe-node"

const fonts = {
  Helvetica: {
    normal: 'Helvetica',
    bold: 'Helvetica-Bold',
    italics: 'Helvetica-Oblique',
    //boldItalics: 'Helvetica-BoldOblique',
  },
}

function getDocumentDefinition(phdVariables: IInputVariables): TDocumentDefinitions {
  return {
    info: getMetaData(phdVariables),
    content: [
      getHeader(),
      getProvisional(),
      getMain(phdVariables),
      getSectionA(phdVariables),
      getSectionB(phdVariables),
      getSectionC(phdVariables),
      getSectionCCommentsAll(phdVariables),
      getSectionD(phdVariables),
      getSectionDAgree(phdVariables),
      getFooter(phdVariables),
    ],
    styles,
    defaultStyle: defaultStyle
  }
}

/*
 * Write the pdf into 'out/makePDF.pdf'
 */
export function makePDFFile(phdVariables: IInputVariables) {
  const printer = new PdfPrinter(fonts)

  const options: BufferOptions = {}
  const pdfDoc = printer.createPdfKitDocument(getDocumentDefinition(phdVariables),
    options)

  pdfDoc.pipe(fs.createWriteStream('out/makePDF.pdf'))
  pdfDoc.end();
}

/*
 * Return the pdf as a base64 string
 */
export async function makePDFString(phdVariables: IInputVariables): Promise<string> {
  const printer = new PdfPrinter(fonts)

  const options: BufferOptions = {}
  const pdfDoc = printer.createPdfKitDocument(getDocumentDefinition(phdVariables), options)
  pdfDoc.end()

  const bufferedPdf = await getStream.buffer(pdfDoc)
  return Buffer.from(bufferedPdf).toString('base64')
}
