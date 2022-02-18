import {Content} from "pdfmake/interfaces"
import {IInputVariables} from "zeebe-node"
import {seperator} from "./utils"


export default function getSectionD(phdVariables: IInputVariables) {

    const section: Content = [{text: 'Overall appraisal and signatures   ', style: 'header'}]
    const intro: Content = { text: [{ text:'By validating the Annual Report (checkbox), the doctoral student and the thesis director(s) agree that the discussion regarding the achieved and planned objectives as well as the progress assessment satisfy and are approved by both parties.'}, seperator]}
    const intro2: Content = { text: [{text: 'For the doctoral student: ',  bold: true},{ text:'Your thesis director(s) is responsible for guiding you in your research and for coaching you to reach the scientific level of a PhD. The critical feedback of your thesis director(s) plays a key role in this process and thus also for your success beyond. Validation of the Annual Report indicates that you have discussed with your thesis director(s) and understand the expectations for improvement in the areas identified, and that you agree on the plan to reach these milestones and to assess your progress.'}, seperator]}
    const intro3: Content = { text: [{text: 'For the thesis director: ',  bold: true},{ text:'Your validation indicates that you have discussed all the above points with your doctoral student and considered their feedback regarding any potential problem, you have explained your expectations for improvement, when appropriate, including mechanisms for intermediate progress assessments, and you have discussed a plan for timely publication of the results and for thesis defence.'}, seperator]}
    const generalAppraisalOfTheProgress: Content = { text:[{text: 'General appraisal of the progress: ',  bold: true}, {text: phdVariables.generalAppraisalOfTheProgress} ,seperator ]}


    return [
        section,
        intro,
        intro2,
        intro3,
        generalAppraisalOfTheProgress,
    ]
}
