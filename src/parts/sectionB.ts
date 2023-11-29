import {Content} from "pdfmake/interfaces"
import {IInputVariables} from "zeebe-node"
import {seperator} from "./utils"


export default function getSectionB(phdVariables: IInputVariables) {

    if ( phdVariables.year == "1st year" )
    {
      return []
    } else
    {
        const section: Content = [{text: 'Research progress', style: 'header'}]
        const goalsOfTheThesis: Content = { text: [{text: 'Overall goals of the thesis' , bold: true}, {text : '\n'}, {text: phdVariables.goalsOfTheThesis }, seperator ]}
        const researchProgressDuringThePastYear: Content = { text: [{text: 'Research progress during the past year ', bold: true}, {text : '\n'}, {text: phdVariables.researchProgressDuringThePastYear },seperator]}
        const haveTheObjectivesChangedInThePastYearIfSoWhyAndHow: Content = { text: [{text: 'Have the objectives changed in the past year? If so, why and how?', bold: true}, {text : '\n'}, {text: phdVariables.haveTheObjectivesChangedInThePastYearIfSoWhyAndHow },seperator]}
        const researchObjectivesForTheNextYear: Content = { text: [{text: 'Research objectives for the next year ', bold: true}, {text : '\n'}, {text: phdVariables.researchObjectivesForTheNextYear },seperator]}
        const timelineOfThePlannedWorkForTheNextYear: Content = phdVariables.timelineOfThePlannedWorkForTheNextYear ?
          { text: [{text: 'Timeline of the planned work for the next year', bold: true}, {text : '\n'}, {text: phdVariables.timelineOfThePlannedWorkForTheNextYear },seperator]} : ""

        const scientificOutput: Content = phdVariables.educationalActivities ?
            { text: [{text: 'Scientific output', bold: true}, {text : '\n'}, {text: phdVariables.scientificOutput },seperator]} : { text: [{text: 'Research objectives for the next year, with approximate timeline (next 365 days)', bold: true}, {text : '\n'}, {text: phdVariables.scientificOutput },seperator]}
        const educationalActivities: Content = phdVariables.educationalActivities ?
            { text: [{text: 'Educational activities', bold: true}, {text : '\n'}, {text: phdVariables.educationalActivities },seperator]} : ""
        /*const scientificOutput: Content = { text: [{text: 'Scientific output', bold: true}, {text : '\n'}, {text: phdVariables.scientificOutput },seperator]}
        const educationalActivities: Content = { text: [{text: 'Educational activities', bold: true}, {text : '\n'}, {text: phdVariables.educationalActivities },seperator]}
        */

        return [
            section,
            goalsOfTheThesis,
            researchProgressDuringThePastYear,
            haveTheObjectivesChangedInThePastYearIfSoWhyAndHow,
            researchObjectivesForTheNextYear,
            timelineOfThePlannedWorkForTheNextYear,
            scientificOutput,
            educationalActivities,
        ]
    }
}
