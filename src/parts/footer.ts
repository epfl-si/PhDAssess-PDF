import {Content} from "pdfmake/interfaces"
import {IInputVariables} from "zeebe-node"
import {seperator} from "./utils"


export default function getFooter(phdVariables: IInputVariables) {


    const programDirectorReview: Content = { text:[{text: 'Program director ',  bold: true}, {text : 'checked the report on '}, {text: phdVariables.programDirectorDate} ]}
    const programDirectorphdComment: Content = { text: [{text : 'Comment: '}, {text: phdVariables.programDirectorComment}, seperator ]}
    const mentorMeet: Content = { text:[{text: 'Mentor and doctoral student have met ',  bold: true}, {text : '\nValidated by the mentor on '}, {text: phdVariables.mentorDate}, {text : '\nValidated by the doctoral student on '}, {text: phdVariables.phdDate}, seperator  ]}
    const today = new Date()
    const currentDay = `${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()}`
    const datePdf : Content = { text: [seperator, {text : 'EPFL, the '}, {text: currentDay},seperator ]}

    return [
        mentorMeet,
        programDirectorReview,
        programDirectorphdComment,
        datePdf,
    ]
}