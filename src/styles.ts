import {Style, StyleDictionary} from "pdfmake/interfaces";


export const defaultStyle: Style = {
    font: 'Roboto',
    fontSize: 13,
    lineHeight: 1.2,
}

export const styles: StyleDictionary = {
    title: {
        fontSize: 24,
        bold: true,
        lineHeight: 3,
    },
    header: {
        fontSize: 19,
        bold: true,
        lineHeight: 1.4,
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
