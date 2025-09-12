import {Content} from "pdfmake/interfaces"

import type {PhDAssessVariables} from "phd-assess-meta/types/variables";
import {seperator} from "./utils"


export default function getFooter(phdVariables: PhDAssessVariables) {

    const programDirectorReview: Content = phdVariables.programDirectorDate ?
        { text:[{text: 'Program director ',  bold: true}, {text : 'checked the report on '}, {text: phdVariables.programDirectorDate ?? 'N/A'} ]}  : ""
    const programDirectorPhdComment: Content = phdVariables.programDirectorComment ?
        { text: [{text : 'Comment: '}, {text: phdVariables.programDirectorComment ?? 'N/A'}, seperator ]}  : ""


    return [
        programDirectorReview,
        programDirectorPhdComment,
    ]
}
