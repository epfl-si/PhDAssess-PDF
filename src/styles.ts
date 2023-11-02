import {Style, StyleDictionary} from "pdfmake/interfaces";


export const defaultStyle: Style = {
    font: 'Roboto',
    fontSize: 13,
    lineHeight: 1.2,
}

export const styles: StyleDictionary = {
    title: {
        fontSize: 20,
        bold: true,
        lineHeight: 3,
    },
    header: {
        fontSize: 18,
        bold: true,
        lineHeight: 1.4,
    },
    subheader: {
        fontSize: 12,
        bold: true,
    },
    table: {
			margin: [0, 5, 0, 15]
		},
		tableHeader: {
			bold: true,
		}
}
