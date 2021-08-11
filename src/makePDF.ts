import PdfPrinter from 'pdfmake'
import fs from 'fs'
import {BufferOptions, TDocumentDefinitions} from "pdfmake/interfaces"

import {defaultStyle, styles} from "./styles"
import getMetaData from "./parts/meta";
import getMain from "./parts/main"
import getSectionA from "./parts/sectionA"
import getSectionB from "./parts/sectionB"
import getSectionC from "./parts/sectionC"
import getSectionD from "./parts/sectionD"
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
            getMain(phdVariables),
            getSectionA(phdVariables),
            getSectionB(phdVariables),
            getSectionC(phdVariables),
            getSectionD(phdVariables),
        ],
        styles,
        defaultStyle: defaultStyle
    }
}

export default function makePDF(phdVariables: IInputVariables) {
    const printer = new PdfPrinter(fonts)

    const options: BufferOptions = {}
    const pdfDoc = printer.createPdfKitDocument(getDocumentDefinition(phdVariables),
        options)

    pdfDoc.pipe(fs.createWriteStream('out/makePDF.pdf'))
    pdfDoc.end();
}
