import {Content} from "pdfmake/interfaces"
import {IInputVariables} from "zeebe-node"
import {seperator} from "./utils"


export default function getSectionA(phdVariables: IInputVariables) {

    const section: Content = [{text: 'Overall appraisal and signatures   ', style: 'header'}]
    const intro: Content = { text: [{ text:'By validating the Annual Report (checkbox), the doctoral student and the thesis director(s) agree that the discussion regarding the achieved and planned objectives as well as the progress assessment satisfy and are approved by both parties.'}, seperator]}
    const intro2: Content = { text: [{text: 'For the doctoral student: ',  bold: true},{ text:'Your thesis director(s) is responsible for guiding you in your research and for coaching you to reach the scientific level of a PhD. The critical feedback of your thesis director(s) plays a key role in this process and thus also for your success beyond. Validation of the Annual Report indicates that you have discussed with your thesis director(s) and understand the expectations for improvement in the areas identified, and that you agree on the plan to reach these milestones and to assess your progress.'}, seperator]}
    const intro3: Content = { text: [{text: 'For the thesis director: ',  bold: true},{ text:'Your validation indicates that you have discussed all the above points with your doctoral student and considered their feedback regarding any potential problem, you have explained your expectations for improvement, when appropriate, including mechanisms for intermediate progress assessments, and you have discussed a plan for timely publication of the results and for thesis defence.'}, seperator]}
    const generalAppraisalOfTheProgress: Content = { text:[{text: 'General appraisal of the progress: ',  bold: true}, {text: phdVariables.generalAppraisalOfTheProgress} ,seperator ]}
    if (phdVariables.agreeThesisCoDirector == "Thesis co-director agrees") {
        var agreeThesisCoDirectorOn = " agreed on the report on "
    }
    else {
        var agreeThesisCoDirectorOn = " did not agree on the report on "
    }
    const agreeThesisCoDirector: Content = phdVariables.thesisCoDirectorName ?
        { text:[{text: 'Thesis co-director',  bold: true}, {text : agreeThesisCoDirectorOn}, {text: phdVariables.thesisCoDirectorDateOfReview} ]} : ""
    const thesisCoDirectorComment: Content = phdVariables.thesisCoDirectorName ?
        { text: [{text : 'Comment: '}, {text: phdVariables.thesisCoDirectorComment},seperator ]} : ""
    if (phdVariables.agreeThesisDirector == "Thesis director agrees") {
          var agreeThesisDirectorOn = " agreed on the report on "
        }
    else {
          var agreeThesisDirectorOn = " did not agree on the report on "
        }
    const agreeThesisDirector: Content = { text:[{text: 'Thesis director ',  bold: true}, {text : agreeThesisDirectorOn}, {text: phdVariables.thesisDirectorDateOfReview} ]}
    const thesisDirectorComment: Content = { text: [{text : 'Comment: '}, {text: phdVariables.thesisDirectorComment},seperator ]}
    if (phdVariables.agreePhd == "Doctoral student agrees") {
        var agreeaPhdOn = " agreed on the report on "
    }
    else {
        var agreeaPhdOn = " did not agree on the report on "
    }
    const agreePhd: Content = { text:[{text: 'Doctoral student',  bold: true}, {text : agreeaPhdOn}, {text: phdVariables.phdDateOfReview} ]}
    const phdComment: Content = { text: [{text : 'Comment: '}, {text: phdVariables.phdComment},seperator ]}
    const programDirectorReview: Content = { text:[{text: 'Program director ',  bold: true}, {text : 'checked the report on '}, {text: phdVariables.programDirectorDate} ]}
    const programDirectorphdComment: Content = { text: [{text : 'Comment: '}, {text: phdVariables.programDirectorComment}, seperator ]}
    const mentorMeet: Content = { text:[{text: 'Mentor and doctoral student have met ',  bold: true}, {text : '\nValidated by the mentor on '}, {text: phdVariables.mentorDate}, {text : '\nValidated by the doctoral student on '}, {text: phdVariables.phdDate}, seperator  ]}
    const today = new Date()
    const currentDay = `${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()}`
    const datePdf : Content = { text: [seperator, {text : 'EPFL, the '}, {text: currentDay},seperator ]}

    return [
        section,
        intro,
        intro2,
        intro3,
        generalAppraisalOfTheProgress,
        agreeThesisCoDirector,
        thesisCoDirectorComment,
        agreeThesisDirector,
        thesisDirectorComment,
        agreePhd,
        phdComment,
        mentorMeet,
        programDirectorReview,
        programDirectorphdComment,
        datePdf,
    ]
}
