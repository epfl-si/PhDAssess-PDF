import {Style, StyleDictionary} from "pdfmake/interfaces";

export const defaultStyle: Style = {
    font: 'Helvetica',
    fontSize: 12,
}

export const styles: StyleDictionary = {
    title: {
        fontSize: 22,
        lineHeight: 1.8,
    },
    header: {
        fontSize: 17,
        lineHeight: 1.8,
        bold: true,
    },
    subheader: {
        fontSize: 13,
        lineHeight: 1.8,
        bold: true,
    },
}
