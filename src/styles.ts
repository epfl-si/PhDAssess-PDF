import {Style, StyleDictionary} from "pdfmake/interfaces";

export const defaultStyle: Style = {
    font: 'Helvetica',
    fontSize: 11,
    lineHeight: 1.4,
}

export const styles: StyleDictionary = {
    title: {
        fontSize: 20,
        bold: true,
        lineHeight: 3,
    },
    header: {
        fontSize: 16,
        bold: true,
        lineHeight: 2.5,
    },
    subheader: {
        fontSize: 14,
        bold: true,
    },
    table: {
			margin: [0, 5, 0, 15]
		},
		tableHeader: {
			bold: true,
		}
}
