import PdfPrinter from "pdfmake"
import fs from "fs"
import { BufferOptions, TDocumentDefinitions } from "pdfmake/interfaces"
import getStream from "get-stream"
import { defaultStyle, styles } from "./styles"
import getMetaData from "./parts/meta"
import getHeader from "./parts/header"
import getProvisional from "./parts/provisional"
import getMain from "./parts/main"
import getSectionA from "./parts/sectionA"
import getSectionB from "./parts/sectionB"
import getSectionC from "./parts/sectionC"
import getSectionCCommentsAll from "./parts/sectionCCommentsAll"
import getSectionD from "./parts/sectionD"
import getSectionDAgree from "./parts/sectionDAgree"
import getFooter from "./parts/footer"
import getDate from "./parts/date"
import type {PhDAssessVariables} from "phd-assess-meta/types/variables";
import type {PDFType} from "phd-assess-meta/types/notification";
import path from 'path'


const fonts = {
  Roboto: {
    normal: path.join(__dirname, 'fonts/Roboto-Regular.ttf'),
    bold: path.join(__dirname, 'fonts/Roboto-Medium.ttf'),
    italics: path.join(__dirname, 'fonts/Roboto-Italic.ttf'),
    bolditalics: path.join(__dirname, 'fonts/Roboto-MediumItalic.ttf')
  }
};

function getDocumentDefinition(phdVariables: PhDAssessVariables, pdfType: PDFType | undefined): TDocumentDefinitions {
  let content

  if (pdfType && pdfType === "collaborativeReview") {
    content = [
      getHeader(),
      getProvisional(),
      getMain(phdVariables),
      getSectionA(phdVariables),
      getSectionB(phdVariables),
      getSectionC(phdVariables),
      getSectionCCommentsAll(phdVariables, pdfType),
      getDate(),
    ]
  } else if (pdfType && pdfType === "unsatisfactory") {
    content = [
      getHeader(),
      getProvisional(),
      getMain(phdVariables),
      getSectionD(phdVariables),
      getSectionA(phdVariables),
      getSectionB(phdVariables),
      getSectionC(phdVariables),
      getSectionCCommentsAll(phdVariables, pdfType),
      getDate(),
    ]
  } else if (pdfType && pdfType === "notAgree") {
    content = [
      getHeader(),
      getProvisional(),
      getMain(phdVariables),
      getSectionD(phdVariables),
      getSectionDAgree(phdVariables),
      getSectionA(phdVariables),
      getSectionB(phdVariables),
      getSectionC(phdVariables),
      getSectionCCommentsAll(phdVariables, pdfType),
      getDate(),
    ]
  } else {
    content = [
      getHeader(),
      getMain(phdVariables),
      getSectionD(phdVariables),
      getSectionDAgree(phdVariables),
      getSectionA(phdVariables),
      getSectionB(phdVariables),
      getSectionC(phdVariables),
      getSectionCCommentsAll(phdVariables, pdfType),
      getFooter(phdVariables),
      getDate(),
    ]
  }

  return {
    info: getMetaData(phdVariables),
    content: content,
    styles,
    defaultStyle: defaultStyle,
  };
}

/*
 * Write the pdf into 'out/makePDF.pdf'
 */
export function makePDFFile(phdVariables: PhDAssessVariables, pdfType: PDFType | undefined) {
  const printer = new PdfPrinter(fonts)

  const options: BufferOptions = {}
  const pdfDoc = printer.createPdfKitDocument(
    getDocumentDefinition(phdVariables, pdfType),
    options
  )

  pdfDoc.pipe(fs.createWriteStream('out/makePDF.pdf'))
  pdfDoc.end()
}

/*
 * Return the pdf as a base64 string
 */
export async function makePDFString(
  phdVariables: PhDAssessVariables,
  pdfType?: PDFType
): Promise<string> {
  const printer = new PdfPrinter(fonts)

  const options: BufferOptions = {}
  const pdfDoc = printer.createPdfKitDocument(
    getDocumentDefinition(phdVariables, pdfType),
    options
  )
  pdfDoc.end();

  const bufferedPdf = await getStream.buffer(pdfDoc)
  return Buffer.from(bufferedPdf).toString('base64')
}
