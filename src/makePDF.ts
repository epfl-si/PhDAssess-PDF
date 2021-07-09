import PdfPrinter from 'pdfmake'
import fs from 'fs'
import {BufferOptions, TDocumentDefinitions} from "pdfmake/interfaces"


import {defaultStyle, styles} from "./styles";
import main from "./parts/main";
import sectionA from "./parts/sectionA"
import {seperator} from "./parts/utils"



const fonts = {
    Helvetica: {
        normal: 'Helvetica',
        bold: 'Helvetica-Bold',
        italics: 'Helvetica-Oblique',
        bolditalics: 'Helvetica-BoldOblique'
    },
}

var dd : TDocumentDefinitions = {
    content: [
        main,
        seperator,
        sectionA,
    ],
    styles,
}

export default function makePDF() {
    const printer = new PdfPrinter(fonts);


    const options: BufferOptions = {
        // ...
    }

    dd['defaultStyle'] = defaultStyle

    const pdfDoc = printer.createPdfKitDocument(dd, options);

    pdfDoc.pipe(fs.createWriteStream('out/makePDF.pdf'));
    pdfDoc.end();
}
