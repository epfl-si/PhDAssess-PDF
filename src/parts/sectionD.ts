import {Content} from "pdfmake/interfaces"
import {IInputVariables} from "zeebe-node"
import {seperator} from "./utils"


export default function getSectionD(phdVariables: IInputVariables) {

    const section: Content = [{text: 'Overall appraisal and signatures   ', style: 'header'}]
    const generalAppraisalOfTheProgress: Content = { text:[{text: 'General appraisal of the progress: ',  bold: true}, {text: phdVariables.generalAppraisalOfTheProgress} ,seperator ]}


    return [
        section,
        generalAppraisalOfTheProgress,
    ]
}
