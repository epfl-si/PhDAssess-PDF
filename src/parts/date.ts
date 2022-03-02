import {Content} from "pdfmake/interfaces"
import {seperator} from "./utils"


export default function getDate() {
    const today = new Date()
    const currentDay = `${('0' + today.getDate()).slice(-2)}.${('0' + today.getMonth()+1).slice(-2)}.${today.getFullYear()}`
    const datePdf : Content = { text: [seperator, {text : 'EPFL, the '}, {text: currentDay},seperator ]}

    return [
        datePdf,
    ]
}
