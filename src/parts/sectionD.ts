import {Content} from "pdfmake/interfaces"
import {IInputVariables} from "zeebe-node"
import {seperator} from "./utils"


export default function getSectionD(phdVariables: IInputVariables) {

    const section: Content = [{text: 'Overall appraisal and signatures   ', style: 'header'}]
    const intro: Content = { text: [{ text:'By validating the Annual Report (checkbox), the doctoral candidate and the thesis director(s) agree that the discussion regarding the achieved and planned objectives as well as the progress assessment satisfy and are approved by both parties.'}, seperator]}
    const generalAppraisalOfTheProgress: Content = { text:[{text: 'General appraisal of the progress: ',  bold: true}, {text: phdVariables.generalAppraisalOfTheProgress} ,seperator ]}


    return [
        section,
        intro2,
        intro3,
        generalAppraisalOfTheProgress,
    ]
}
