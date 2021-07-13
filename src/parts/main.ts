import {Content} from "pdfmake/interfaces"
import {IInputVariables} from "zeebe-node"


export default function getMain(phdVariables: IInputVariables) {
    const title: Content = [{text: 'PhD Assess', style: 'title'}, {text: '\n'}]
    const header: Content =  [{text: 'Annual Report', style: 'header'}, {text: '\n'}]
    const doctoralProgram: Content =  [{text: 'Doctoral program', style: 'subheader'}, {text: phdVariables.HaveTheObjectivesChangedInThePastYearIfSoWhyAndHow}, {text: '\n'}]
    const dateOfEnrolment: Content =  [{text: 'Date of enrolment', style: 'subheader'}, {text: phdVariables.dateOfEnrolment}, {text: '\n'}]
    const year: Content =  [{text: 'Year', style: 'subheader'}, {text: phdVariables.year}, {text: '\n'}]

    return [
        title,
        header,
        doctoralProgram,
        {
            columns: [
                dateOfEnrolment,
                year,
            ],
        },
    ]
}
