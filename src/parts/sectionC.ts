import {Content} from "pdfmake/interfaces"
import {IInputVariables} from "zeebe-node"


export default function getSectionC(phdVariables: IInputVariables) {
    const section: Content = [{text: 'Progress assessment ', style: 'header'}]

    return [
        section,
    ]
}
