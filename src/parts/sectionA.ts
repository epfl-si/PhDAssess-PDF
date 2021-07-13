import {Content} from "pdfmake/interfaces"
import {IInputVariables} from "zeebe-node"


export default function getSectionA(phdVariables: IInputVariables) {
    const header: Content = [{text: 'Section A: Basic information', style: 'header'}, {text: '\n'}]
    const phdStudent: Content = [{text: 'Name of candidate', style: 'subheader'}, {text: phdVariables.phdStudentSciper }, {text: '\n'}]
    const tentativeThesisTitle: Content = [{text: 'Tentative thesis title', style: 'subheader'}, {text: phdVariables.tentativeThesisTitle }, {text: '\n'}]
    const thesisDirectorSciper: Content = [{text: 'PhD thesis director', style: 'subheader'}, {text: phdVariables.thesisDirectorSciper }, {text: '\n'}]
    const thesisCoDirectorSciper: Content = [{text: 'PhD thesis co-director', style: 'subheader'}, {text: phdVariables.thesisCoDirectorSciper }, {text: '\n'}]
    const dateOfCandidacyExam: Content = [{text: 'Date of candidacy exam', style: 'subheader'}, {text: phdVariables.dateOfCandidacyExam }, {text: '\n'}]
    const taDutiesHoursAndOrCoursesCompleted : Content = [{text: 'TA duties. Hours and/or courses completed', style: 'subheader'}, {text: phdVariables.taDutiesHoursAndOrCoursesCompleted }, {text: '\n'}]

    const listBelowObtainedCreditsAndPlannedCourses = [
        [{text: 'Credits and planned courses', style: 'subheader'}],
        Array.from(phdVariables.listBelowObtainedCreditsAndPlannedCourses, (course : IInputVariables) => [{
                columns: [
                    [{text: 'Year/semester', style: 'subheader'}, {text: course.yearSemester}, {text: '\n'}],
                    [{text: 'Course (number/name)', style: 'subheader'}, {text: course.courseNumberName}, {text: '\n'}],
                    [{text: 'Credits', style: 'subheader'}, {text: course.credits}, {text: '\n'}],
                ]
            }]
        )
    ]

    return [
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
}
