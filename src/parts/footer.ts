import {Content} from "pdfmake/interfaces"

import {PhDAssessVariables} from "phd-assess-meta/types/variables";
import {seperator} from "./utils"


export default function getFooter(phdVariables: PhDAssessVariables) {

    const programDirectorReview: Content = { text:[{text: 'Program director ',  bold: true}, {text : 'checked the report on '}, {text: phdVariables.programDirectorDate ?? 'N/A'} ]}
    const programDirectorphdComment: Content = { text: [{text : 'Comment: '}, {text: phdVariables.programDirectorComment ?? 'N/A'}, seperator ]}
    const mentorMeet: Content = {
        text: [
            {text: 'Mentor and doctoral student have met ',  bold: true},
            {text : '\nValidated by the mentor on '},
            {text: phdVariables.mentorDate ?? 'N/A'},
            {text : '\nValidated by the doctoral student on '},
            {text: phdVariables.phdDate ?? 'N/A'},
            seperator
        ]
    }

    return [
        mentorMeet,
        programDirectorReview,
        programDirectorphdComment,
    ]
}
