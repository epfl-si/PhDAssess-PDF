import {Content} from "pdfmake/interfaces"
import {IInputVariables} from "zeebe-node"
import {seperator} from "./utils"


export default function getSectionA(phdVariables: IInputVariables) {

    const section: Content = [{text: 'Section D: Overall appraisal and signatures   ', style: 'header'}]
    const intro: Content = { text: [{ text:'By signing the AR the student and the TD(s) agree that the discussion regarding the achieved and planned objectives as well as the progress assessment satisfy and are approved by both parties.'}, seperator]}
    const generalAppraisalOfTheProgress: Content = { text:[{text: 'General appraisal of the progress : ',  bold: true}, {text: phdVariables.generalAppraisalOfTheProgress} ,seperator ]}
    const agreeThesisCoDirector: Content = { text:[{text: 'Thesis Co-Director review : ',  bold: true}, {text : '\n'}, {text: phdVariables.thesisCoDirectorDateOfReview}, {text : '       '}, {text: phdVariables.agreeThesisCoDirector} ]}
    const thesisCoDirectorComment: Content = { text: [{text : 'Comment : '}, {text: phdVariables.thesisCoDirectorComment},seperator ]}
    const agreeThesisDirector: Content = { text:[{text: 'Thesis Director review : ',  bold: true}, {text : '\n'}, {text: phdVariables.thesisDirectorDateOfReview}, {text : '       '}, {text: phdVariables.agreeThesisDirector} ]}
    const thesisDirectorComment: Content = { text: [{text : 'Comment : '}, {text: phdVariables.thesisDirectorComment},seperator ]}
    const agreePhd: Content = { text:[{text: 'Thesis PhD review : ',  bold: true}, {text : '\n'}, {text: phdVariables.phdDateOfReview1}, {text : '       '}, {text: phdVariables.agreePhd} ]}
    const phdComment: Content = { text: [{text : 'Comment : '}, {text: phdVariables.phdComment},seperator ]}
    const programDirectorReview: Content = { text:[{text: 'Program Director ',  bold: true}, {text : 'read the report on '}, {text: phdVariables.programDirectorDateOfReview} ]}
    const programDirectorComment: Content = { text: [{text : 'Comment : '}, {text: phdVariables.programDirectorComment},seperator ]}
    const mentorMeet: Content = { text:[{text: 'Mentor and PhD have met ',  bold: true}, {text : '\nValidate by Mentor on '}, {text: phdVariables.mantorDate}, {text : '\nValidate by Phd on '}, {text: phdVariables.phdDate} ]}

    return [
        section,
        intro,
        generalAppraisalOfTheProgress,
        agreeThesisCoDirector,
        thesisCoDirectorComment,
        agreeThesisDirector,
        thesisDirectorComment,
        agreePhd,
        phdComment,
        programDirectorReview,
        programDirectorComment,
        mentorMeet,
    ]
}
