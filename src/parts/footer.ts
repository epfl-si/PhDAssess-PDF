import {Content} from "pdfmake/interfaces"

import type {PhDAssessVariables} from "phd-assess-meta/types/variables";
import {seperator} from "./utils"


export default function getFooter(phdVariables: PhDAssessVariables) {

    const programDirectorReview: Content = phdVariables.programDirectorDate ?
        { text:[{text: 'Program director ',  bold: true}, {text : 'checked the report on '}, {text: phdVariables.programDirectorDate ?? 'N/A'} ]}  : ""
    const programDirectorphdComment: Content = phdVariables.programDirectorComment ?
        { text: [{text : 'Comment: '}, {text: phdVariables.programDirectorComment ?? 'N/A'}, seperator ]}  : ""
    const mentorMeet: Content = {
        text: [
            {text: 'Mentor and doctoral candidate have met ',  bold: true},
            {text : '\nValidated by the mentor on '},
            {text: phdVariables.mentorDate ?? 'N/A'},
            {text : '\nValidated by the doctoral candidate on '},
            {text: phdVariables.phdDateOfReview ?? 'N/A'},
            seperator
        ]
    }

    return [
        mentorMeet,
        programDirectorReview,
        programDirectorphdComment,
    ]
}
