import {Content} from "pdfmake/interfaces"
import {IInputVariables} from "zeebe-node"
import {seperator} from "./utils"


export default function getSectionCCommentsWithoutCommon(phdVariables: IInputVariables) {

    const comment1: Content = [{text: 'Student’s engagement in the project'  , bold: true}]
    const phdComment1: Content = { text: [{text : 'Doctoral student comment:\n', bold: true}, {text: phdVariables.phdComment1} ]}
    const thesisDirectorComment1: Content = { text: [{text : 'Thesis director comment:\n', bold: true}, {text: phdVariables.thesisDirectorComment1} ]}
    const thesisCoDirectorComment1: Content = phdVariables.thesisCoDirectorName ?
        { text: [{text : 'Thesis co-director comment:\n', bold: true}, {text: phdVariables.thesisCoDirectorComment1} ]} :  ""
    const comment2: Content =  [ {text: '\nThesis director’s (and co-director if applicable) supervision'  , bold: true}]
    const phdComment2: Content = { text: [{text : 'Doctoral student comment:\n', bold: true}, {text: phdVariables.phdComment2} ]}
    const thesisDirectorComment2: Content = { text: [{text : 'Thesis director comment:\n', bold: true}, {text: phdVariables.thesisDirectorComment2} ]}
    const thesisCoDirectorComment2: Content = phdVariables.thesisCoDirectorName ?
        { text: [{text : 'Thesis co-director comment:\n', bold: true}, {text: phdVariables.thesisCoDirectorComment2} ]} : ""
    const comment3: Content = [{text: '\nProject’s progress'  , bold: true}]
    const phdComment3: Content = { text: [{text : 'Doctoral student comment:\n', bold: true}, {text: phdVariables.phdComment3} ]}
    const thesisDirectorComment3: Content = { text: [{text : 'Thesis director comment:\n', bold: true}, {text: phdVariables.thesisDirectorComment3} ]}
    const thesisCoDirectorComment3: Content = phdVariables.thesisCoDirectorName ?
        { text: [{text : 'Thesis co-director comment:\n', bold: true}, {text: phdVariables.thesisCoDirectorComment3} ]} : ""
    const comment4: Content = [{text: '\nStudent’s scientific and career development'  , bold: true}]
    const phdComment4: Content = { text: [{text : 'Doctoral student comment:\n', bold: true}, {text: phdVariables.phdComment4} ]}
    const thesisDirectorComment4: Content = { text: [{text : 'Thesis director comment:\n', bold: true}, {text: phdVariables.thesisDirectorComment4} ]}
    const thesisCoDirectorComment4: Content = phdVariables.thesisCoDirectorName ?
        { text: [{text : 'Thesis co-director comment:\n', bold: true}, {text: phdVariables.thesisCoDirectorComment4} ]} : ""
    const comment5: Content = [{text: '\nLaboratory situation'  , bold: true}]
    const phdComment5: Content = { text: [{text : 'Doctoral student comment:\n', bold: true}, {text: phdVariables.phdComment5} ]}
    const thesisDirectorComment5: Content = { text: [{text : 'Thesis director comment:\n', bold: true}, {text: phdVariables.thesisDirectorComment5} ]}
    const thesisCoDirectorComment5: Content = phdVariables.thesisCoDirectorName ?
        { text: [{text : 'Thesis co-director comment:\n', bold: true}, {text: phdVariables.thesisCoDirectorComment5} ]} : ""
    const comment6: Content = [{text: '\nAny other specific points'  , bold: true}]
    const phdComment6: Content = { text: [{text : 'Doctoral student comment:\n', bold: true}, {text: phdVariables.phdComment6} ]}
    const thesisDirectorComment6: Content = { text: [{text : 'Thesis director comment:\n', bold: true}, {text: phdVariables.thesisDirectorComment6} ]}
    const thesisCoDirectorComment6: Content = phdVariables.thesisCoDirectorName ?
        { text: [{text : 'Thesis co-director comment:\n', bold: true}, {text: phdVariables.thesisCoDirectorComment6} ]} : ""
    return [
        comment1,
        phdComment1,
        thesisDirectorComment1,
        thesisCoDirectorComment1,
        comment2,
        phdComment2,
        thesisDirectorComment2,
        thesisCoDirectorComment2,
        comment3,
        phdComment3,
        thesisDirectorComment3,
        thesisCoDirectorComment3,
        comment4,
        phdComment4,
        thesisDirectorComment4,
        thesisCoDirectorComment4,
        comment5,
        phdComment5,
        thesisDirectorComment5,
        thesisCoDirectorComment5,
        comment6,
        phdComment6,
        thesisDirectorComment6,
        thesisCoDirectorComment6,
    ]
}
