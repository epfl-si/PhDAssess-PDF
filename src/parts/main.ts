import {Content} from "pdfmake/interfaces"
import {IInputVariables} from "zeebe-node"



export default function getMain(phdVariables: IInputVariables) {
    const title: Content = [{text: 'Annual Report', style: 'title'} ]
    const doctoralProgram: Content = { text:[{text: 'Doctoral program : ',  bold: true}, phdVariables.doctoralProgramName ]}
    const dateOfEnrolment: Content = { text:[{text: 'Date of enrolment : ', bold: true}, {text: phdVariables.dateOfEnrolment}]}
    const year: Content =  { text:[{text: 'Year : ', bold: true}, {text: phdVariables.year} ]}

    return [
        title,
        doctoralProgram,
        dateOfEnrolment,
        year,
    ]
}
