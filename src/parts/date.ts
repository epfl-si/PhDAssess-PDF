import {Content} from "pdfmake/interfaces"
import {IInputVariables} from "zeebe-node"
import {seperator} from "./utils"


export default function getDate() {
    const today = new Date()
    const currentDay = `${today.getDate()}.${today.getMonth()+1}.${today.getFullYear()}`
    const datePdf : Content = { text: [seperator, {text : 'EPFL, the '}, {text: currentDay},seperator ]}

    return [
        datePdf,
    ]
}