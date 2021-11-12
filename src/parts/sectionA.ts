import {Content} from "pdfmake/interfaces"
import {IInputVariables} from "zeebe-node"
import {seperator} from "./utils"



export default function getSectionA(phdVariables: IInputVariables) {

    const section: Content = [{text: 'Basic information', style: 'header'}]
    const nameOfCandidate: Content = { text:[{text: 'Name of candidate: ',  bold: true}, phdVariables.phdStudentName, {text: ' ('}, {text: phdVariables.phdStudentSciper } , {text: ')'} ]}
    const tentativeThesisTitle: Content = { text: [{text: 'Tentative thesis title: ', bold: true}, {text: phdVariables.tentativeThesisTitle }]}
    const phDThesisDirector: Content = { text: [{text: 'Thesis director: ', bold: true}, {text: phdVariables.thesisDirectorName }]}
    const phDThesisCoDirector: Content = phdVariables.thesisCoDirectorName ?
        { text: [{text: 'Thesis co-director: ', bold: true}, {text: phdVariables.thesisCoDirectorName }]} : "";
    const dateOfCandidacyExam: Content = { text: [{text: 'Date of candidacy exam: ', bold: true}, {text: phdVariables.dateOfCandidacyExam }, seperator]}

    const taDutiesHoursAndOrCoursesCompleted : Content = { text: [{text: 'TA duties ',bold: true}, {text: '(activities done): '}, {text: phdVariables.taDutiesHoursAndOrCoursesCompleted }, seperator]}

    const coursesCredits: Content = {text: [{text: 'Courses:        ',bold: true},
                                            {text: 'Credits needed:  '}, {text: phdVariables.creditsNeeded },
                                            {text: '          Credits completed:  '}, {text: phdVariables.totalCreditsObtained },
                                            {text: '          Credits planned:  '}, {text: phdVariables.totalCreditsPlanned}, seperator]}


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


    ]
}
