import {Content} from "pdfmake/interfaces"
import {IInputVariables} from "zeebe-node"
import {seperator} from "./utils"



export default function getSectionA(phdVariables: IInputVariables) {

    const section: Content = [{text: 'Basic information', style: 'header'}]
    const nameOfCandidate: Content = { text:[{text: 'Name of candidate: ',  bold: true}, phdVariables.phdStudentName ]}
    const tentativeThesisTitle: Content = { text: [{text: 'Tentative thesis title: ', bold: true}, {text: phdVariables.tentativeThesisTitle }]}
    const phDThesisDirector: Content = { text: [{text: 'Thesis director: ', bold: true}, {text: phdVariables.thesisDirectorName }]}
    const phDThesisCoDirector: Content = { text: [{text: 'Thesis co-director: ', bold: true}, {text: phdVariables.thesisCoDirectorName }]}
    const dateOfCandidacyExam: Content = { text: [{text: 'Date of candidacy exam: ', bold: true}, {text: phdVariables.dateOfCandidacyExam }, seperator]}

    const taDutiesHoursAndOrCoursesCompleted : Content = { text: [{text: 'TA duties ',bold: true}, {text: '(Hours and/or courses completed): '}, {text: phdVariables.taDutiesHoursAndOrCoursesCompleted }, seperator]}

    const coursesCredits: Content = {text: [{text: 'Courses:        ',bold: true},
                                            {text: 'Credits needed:  '}, {text: phdVariables.creditsNeeded },
                                            {text: '          Credits completed:  '}, {text: phdVariables.totalCreditsObtained },
                                            {text: '          Credits planned:  '}, {text: phdVariables.totalCreditsPlanned}, seperator]}
    const listBelowObtainedCredits = {text : 'Please list below obtained credits:'}
    const listcoursesCreditsCompleted: Content= {
        style: 'table',
        table: {
            headerRows: 1,
            body: [
              [{text: 'Year / semester', style: 'tableHeader'}, {text: 'Course (name and number)', style: 'tableHeader'}, {text: 'Credits', style: 'tableHeader'}],
              ...Array.from(phdVariables.listBelowObtainedCredits, (course : IInputVariables) => [
                {text: `${course.yearObtained} / ${course.semestreObtained}`},
                {text: course.courseNumberNameObtained},
                {text: course.creditsObtained},
              ]),
            ]
          }
        }
        const listBelowPlannedCourses = {text : 'Please list below planned courses:'}
        const listcoursesCreditsPlanned: Content= {
            style: 'table',
            table: {
                headerRows: 1,
                body: [
                  [{text: 'Year / semester', style: 'tableHeader'}, {text: 'Course (name and number)', style: 'tableHeader'}, {text: 'Credits', style: 'tableHeader'}],
                  ...Array.from(phdVariables.listBelowPlannedCourses, (course : IInputVariables) => [
                    {text: `${course.yearPlanned} / ${course.semestrePlanned}`},
                    {text: course.courseNumberNamePlanned},
                    {text: course.creditsPlanned},
                  ]),
                ]
              }
            }

    return [
        seperator,
        seperator,
        section,
        nameOfCandidate,
        tentativeThesisTitle,
        phDThesisDirector,
        phDThesisCoDirector,
        dateOfCandidacyExam,
        taDutiesHoursAndOrCoursesCompleted,
        coursesCredits,
        listBelowObtainedCredits,
        listcoursesCreditsCompleted,
        listBelowPlannedCourses,
        listcoursesCreditsPlanned,

    ]
}
