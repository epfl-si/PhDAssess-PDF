import {Content} from "pdfmake/interfaces"
import {IInputVariables} from "zeebe-node"
import {seperator} from "./utils"


export default function getSectionA(phdVariables: IInputVariables) {

    const section: Content = [{text: 'Section B: Research progress', style: 'header'}]
    const intro: Content = { text:'To be completed by the student and discussed (revised if necessary) with the TD (and co-TD) during the AR meeting. Future objectives are meant to provide guidance in the project and should thus be as realistic as possible. Achieved and planned objectives should be discussed and agreed upon by the student and TD by approving the AR. \n\n'}
    const goalsOfTheThesis: Content = { text: [{text: 'What are the overall goals of the thesis?' , bold: true}, {text : '\n'}, {text: phdVariables.goalsOfTheThesis }, seperator ]}
    const researchProgressDuringThePastYear: Content = { text: [{text: 'Research progress during the past year. ', bold: true}, {text : '\n'}, {text: phdVariables.researchProgressDuringThePastYear },seperator]}
    const haveTheObjectivesChangedInThePastYearIfSoWhyAndHow: Content = { text: [{text: 'Have the objectives changed in the past year? If so, why and how?', bold: true}, {text : '\n'}, {text: phdVariables.haveTheObjectivesChangedInThePastYearIfSoWhyAndHow },seperator]}
    const researchObjectivesForTheNextYear: Content = { text: [{text: 'Research objectives for the next year. ', bold: true}, {text : '\n'}, {text: phdVariables.researchObjectivesForTheNextYear },seperator]}
    const timelineOfThePlannedWorkForTheNextYear: Content = { text: [{text: 'Timeline of the planned work for the next year.', bold: true}, {text : '\n'}, {text: phdVariables.timelineOfThePlannedWorkForTheNextYear },seperator]}
    const scientificOutput: Content = { text: [{text: 'Scientific output.', bold: true}, {text : '\n'}, {text: phdVariables.educationalActivities },seperator]}
    const educationalActivities: Content = { text: [{text: 'Scientific output.', bold: true}, {text : '\n'}, {text: phdVariables.educationalActivities },seperator]}

    return [
        section,
        intro,
        goalsOfTheThesis,
        researchProgressDuringThePastYear,
        haveTheObjectivesChangedInThePastYearIfSoWhyAndHow,
        researchObjectivesForTheNextYear,
        timelineOfThePlannedWorkForTheNextYear,
        scientificOutput,
        educationalActivities,
    ]
}
