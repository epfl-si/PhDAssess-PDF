import {Content} from "pdfmake/interfaces"
import {seperator} from "./utils"
import {IInputVariables} from "zeebe-node"


export default function getDate(phdVariables: IInputVariables) {
    const pdfAnnex: Content = phdVariables.pdfAnnexPath ? { text: [{text: 'Please read the following appendix, which is part of the report. ', bold: true}, {text : '\n'}, {text : '\n'}]} : ""
    const today = new Date()
    const currentDay = `${('0' + today.getDate()).slice(-2)}.${('0' + (today.getMonth() +1)).slice(-2)}.${today.getFullYear()}`
    const datePdf : Content = { text: [seperator, {text : 'EPFL, the '}, {text: currentDay},seperator ]}

    return [
        pdfAnnex,
        datePdf,
    ]
}
