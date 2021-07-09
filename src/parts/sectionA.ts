import variables from "../variables.json"
import {Content} from "pdfmake/interfaces";

const header: Content = [{text: 'Section A: Basic information', style: 'header'}, {text: '\n'}]
const phdStudent: Content = [{text: 'Name of candidate', style: 'subheader'}, {text: variables.phdStudentSciper }, {text: '\n'}]
const tentativeThesisTitle: Content = [{text: 'Tentative thesis title', style: 'subheader'}, {text: variables.tentativeThesisTitle }, {text: '\n'}]
const thesisDirectorSciper: Content = [{text: 'PhD thesis director', style: 'subheader'}, {text: variables.thesisDirectorSciper }, {text: '\n'}]
const thesisCoDirectorSciper: Content = [{text: 'PhD thesis co-director', style: 'subheader'}, {text: variables.thesisCoDirectorSciper }, {text: '\n'}]
const dateOfCandidacyExam: Content = [{text: 'Date of candidacy exam', style: 'subheader'}, {text: variables.dateOfCandidacyExam }, {text: '\n'}]
const taDutiesHoursAndOrCoursesCompleted : Content = [{text: 'TA duties. Hours and/or courses completed', style: 'subheader'}, {text: variables.taDutiesHoursAndOrCoursesCompleted }, {text: '\n'}]

const listBelowObtainedCreditsAndPlannedCourses = [
    [{text: 'Credits and planned courses', style: 'subheader'}],
    Array.from(variables.listBelowObtainedCreditsAndPlannedCourses, x => [{
             columns: [
                 [{text: 'Year/semester', style: 'subheader'}, {text: x.yearSemester}, {text: '\n'}],
                 [{text: 'Course (number/name)', style: 'subheader'}, {text: x.courseNumberName}, {text: '\n'}],
                 [{text: 'Credits', style: 'subheader'}, {text: x.credits}, {text: '\n'}],
             ]
         }]
        )
]

const content = [
    header,
    phdStudent,
    tentativeThesisTitle,
    {
        columns: [
            thesisDirectorSciper,
            thesisCoDirectorSciper,
        ],
    },
    dateOfCandidacyExam,
    taDutiesHoursAndOrCoursesCompleted,
    listBelowObtainedCreditsAndPlannedCourses,
]

export default content
