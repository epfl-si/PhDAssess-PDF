import variables from "../variables.json"
import {Content} from "pdfmake/interfaces";

const title: Content = [{text: 'PhD Assess', style: 'title'}, {text: '\n'}]
const header: Content =  [{text: 'Annual Report', style: 'header'}, {text: '\n'}]
const doctoralProgram: Content =  [{text: 'Doctoral program', style: 'subheader'}, {text: variables.HaveTheObjectivesChangedInThePastYearIfSoWhyAndHow}, {text: '\n'}]
const dateOfEnrolment: Content =  [{text: 'Date of enrolment', style: 'subheader'}, {text: variables.dateOfEnrolment}, {text: '\n'}]
const year: Content =  [{text: 'Year', style: 'subheader'}, {text: variables.year}, {text: '\n'}]


const content = [
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

export default content
