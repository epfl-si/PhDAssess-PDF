import {Content} from "pdfmake/interfaces"
import {IInputVariables} from "zeebe-node"
import {seperator} from "./utils"


export default function getSectionCCommentsAll(phdVariables: IInputVariables, pdfType: String | undefined) {

    const comment1: Content = phdVariables.phdComment3 ?
        [{text: 'Doctoral candidate’s engagement in the thesis'  , bold: true}] : [{text: 'Progress in the thesis and development as a researcher:'  , bold: true}]
    const phdComment1: Content = { text: [{text : 'Doctoral candidate comment:\n', bold: true}, {text: phdVariables.phdComment1},seperator ]}
    const thesisDirectorComment1: Content = { text: [{text : 'Thesis director comment:\n', bold: true}, {text: phdVariables.thesisDirectorComment1},seperator ]}
    const thesisCoDirectorComment1: Content = phdVariables.thesisCoDirectorName ?
        { text: [{text : 'Thesis co-director comment:\n', bold: true}, {text: phdVariables.thesisCoDirectorComment1},seperator ]} :  ""
    const commonComment1: Content = (pdfType != "collaborativeReview" && phdVariables.commonComment1) ?
         { text: [{text : 'Common comment:\n', bold: true}, {text: phdVariables.commonComment1},seperator ]} : ""
    const comment2: Content = phdVariables.phdComment3 ?
        [{text: '\nThesis director’s (and co-director if applicable) supervision'  , bold: true}] : [{text: '\nContext of the thesis and support available:'  , bold: true}]
    const phdComment2: Content = { text: [{text : 'Doctoral candidate comment:\n', bold: true}, {text: phdVariables.phdComment2},seperator ]}
    const thesisDirectorComment2: Content = { text: [{text : 'Thesis director comment:\n', bold: true}, {text: phdVariables.thesisDirectorComment2},seperator ]}
    const thesisCoDirectorComment2: Content = phdVariables.thesisCoDirectorName ?
        { text: [{text : 'Thesis co-director comment:\n', bold: true}, {text: phdVariables.thesisCoDirectorComment2},seperator ]} : ""
    const commonComment2: Content =  (pdfType != "collaborativeReview" && phdVariables.commonComment2) ?
        { text: [{text : 'Common comment:\n', bold: true}, {text: phdVariables.commonComment2},seperator ]} : ""
    const comment3: Content = phdVariables.phdComment3  ?
        [{text: '\nThesis progress'  , bold: true}] : ""
    const phdComment3: Content = phdVariables.phdComment3 ?
        { text: [{text : 'Doctoral candidate comment:\n', bold: true}, {text: phdVariables.phdComment3},seperator ]} : ""
    const thesisDirectorComment3: Content = phdVariables.phdComment3 ?
        { text: [{text : 'Thesis director comment:\n', bold: true}, {text: phdVariables.thesisDirectorComment3},seperator ]} : ""
    const thesisCoDirectorComment3: Content = (phdVariables.thesisCoDirectorName && phdVariables.phdComment3 ) ?
        { text: [{text : 'Thesis co-director comment:\n', bold: true}, {text: phdVariables.thesisCoDirectorComment3},seperator ]} : ""
    const commonComment3: Content = phdVariables.phdComment3  && pdfType != "collaborativeReview" ?
        { text: [{text : 'Common comment:\n', bold: true}, {text: phdVariables.commonComment3},seperator ]} : ""
    const comment4: Content = phdVariables.phdComment3 ?
        [{text: '\nDoctoral candidate’s scientific and career development'  , bold: true}] : ""
    const phdComment4: Content = phdVariables.phdComment3 ?
        { text: [{text : 'Doctoral candidate comment:\n', bold: true}, {text: phdVariables.phdComment4},seperator ]} : ""
    const thesisDirectorComment4: Content = phdVariables.phdComment3 ?
        { text: [{text : 'Thesis director comment:\n', bold: true}, {text: phdVariables.thesisDirectorComment4},seperator ]} : ""
    const thesisCoDirectorComment4: Content = (phdVariables.thesisCoDirectorName && phdVariables.phdComment3) ?
        { text: [{text : 'Thesis co-director comment:\n', bold: true}, {text: phdVariables.thesisCoDirectorComment4},seperator ]} : ""
    const commonComment4: Content = phdVariables.phdComment3 && pdfType != "collaborativeReview" ?
        { text: [{text : 'Common comment:\n', bold: true}, {text: phdVariables.commonComment4},seperator ]} : ""
    const comment5: Content = phdVariables.phdComment3 ?
        [{text: '\nLaboratory environment'  , bold: true}] : ""
    const phdComment5: Content = phdVariables.phdComment3 ?
        { text: [{text : 'Doctoral candidate comment:\n', bold: true}, {text: phdVariables.phdComment5},seperator ]} : ""
    const thesisDirectorComment5: Content = phdVariables.phdComment3 ?
        { text: [{text : 'Thesis director comment:\n', bold: true}, {text: phdVariables.thesisDirectorComment5},seperator ]} : ""
    const thesisCoDirectorComment5: Content = (phdVariables.thesisCoDirectorName && phdVariables.phdComment3) ?
        { text: [{text : 'Thesis co-director comment:\n', bold: true}, {text: phdVariables.thesisCoDirectorComment5},seperator ]} : ""
    const commonComment5: Content = phdVariables.phdComment3 && pdfType != "collaborativeReview" ?
        { text: [{text : 'Common comment:\n', bold: true}, {text: phdVariables.commonComment5},seperator ]} : ""
    const comment6: Content =  phdVariables.phdComment6 ||  phdVariables.thesisDirectorComment6 ||  phdVariables.thesisCoDirectorComment6 || phdVariables.commonComment6 ?
        [{text: '\nAny other specific points:'  , bold: true}] :""
    const phdComment6: Content = phdVariables.phdComment6 ? 
        { text: [{text : 'Doctoral candidate comment:\n', bold: true}, {text: phdVariables.phdComment6},seperator ]} : ""
    const thesisDirectorComment6: Content = phdVariables.thesisDirectorComment6 ?
        { text: [{text : 'Thesis director comment:\n', bold: true}, {text: phdVariables.thesisDirectorComment6},seperator ]} :""
    const thesisCoDirectorComment6: Content = (phdVariables.thesisCoDirectorName && phdVariables.thesisCoDirectorComment6 ) ?
        { text: [{text : 'Thesis co-director comment:\n', bold: true}, {text: phdVariables.thesisCoDirectorComment6},seperator ]} : ""
    const commonComment6: Content = (pdfType != "collaborativeReview" && phdVariables.commonComment6) ?
        { text: [{text : 'Common comment:\n', bold: true}, {text: phdVariables.commonComment6},seperator ]} : "\n\n"
    return [
        comment1,
        phdComment1,
        thesisDirectorComment1,
        thesisCoDirectorComment1,
        commonComment1,
        comment2,
        phdComment2,
        thesisDirectorComment2,
        thesisCoDirectorComment2,
        commonComment2,
        comment3,
        phdComment3,
        thesisDirectorComment3,
        thesisCoDirectorComment3,
        commonComment3,
        comment4,
        phdComment4,
        thesisDirectorComment4,
        thesisCoDirectorComment4,
        commonComment4,
        comment5,
        phdComment5,
        thesisDirectorComment5,
        thesisCoDirectorComment5,
        commonComment5,
        comment6,
        phdComment6,
        thesisDirectorComment6,
        thesisCoDirectorComment6,
        commonComment6,
    ]
}
