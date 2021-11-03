import {Content} from "pdfmake/interfaces"
import {IInputVariables} from "zeebe-node"
import {seperator} from "./utils"


export default function getSectionA(phdVariables: IInputVariables) {

    const section: Content = [{text: 'Progress assessment ', style: 'header'}]
    const intro: Content = { text: [{ text:'To be completed independently by the doctoral student and thesis director (and co-director if present), then discussed and approved by both during the Annual Report meeting.'}, seperator,
                           { text:'Aims on the doctoral student side: \n'},
                           { text:'  -	to assess how the doctoral student views their own progress and skills\n', italics: true},
                           { text:'  -	to identify and communicate to the thesis director in what areas the doctor seeks more input or help', italics: true}, seperator,
                           { text:'Aims on the thesis director (and co-director if applicable) side :\n'},
                           { text:'  -	to ensure that your doctoral students knows how they are performing overall according to you\n', italics: true},
                           { text:'  -	to communicate what you think strengths and weaknesses are towards completing a PhD\n', italics: true},
                           { text:'  -	to communicate what you think needs to be improved\n', italics: true},
                           { text:'  -	to ensure that career issues are discussed at least once per year', italics: true}, seperator,
                           { text:'Please use the comments box to briefly assess the progress and further elaborate any specific issues. '},seperator]}
    const comment1: Content = [{text: 'Student’s engagement in the project'  , bold: true}]
    const phdComment1: Content = { text: [{text : 'Doctoral student comment  : '}, {text: phdVariables.phdComment1} ]}
    const thesisDirectorComment1: Content = { text: [{text : 'Thesis director comment : '}, {text: phdVariables.thesisDirectorComment1} ]}
    const thesisCoDirectorComment1: Content = phdVariables.thesisCoDirectorName ?
        { text: [{text : 'Thesis co-director comment : '}, {text: phdVariables.thesisCoDirectorComment1} ]} :  ""
    const commonComment1: Content = { text: [{text : 'Common comment : '}, {text: phdVariables.commonComment1},seperator ]}
    const comment2: Content = [{text: 'Thesis director’s supervision'  , bold: true}]
    const phdComment2: Content = { text: [{text : 'Doctoral student comment : '}, {text: phdVariables.phdComment2} ]}
    const thesisDirectorComment2: Content = { text: [{text : 'Thesis director comment : '}, {text: phdVariables.thesisDirectorComment2} ]}
    const thesisCoDirectorComment2: Content = phdVariables.thesisCoDirectorName ?
        { text: [{text : 'Thesis co-director comment : '}, {text: phdVariables.thesisCoDirectorComment2} ]} : ""
    const commonComment2: Content = { text: [{text : 'Common comment : '}, {text: phdVariables.commonComment2},seperator ]}
    const comment3: Content = [{text: 'Project’s progress'  , bold: true}]
    const phdComment3: Content = { text: [{text : 'Doctoral student comment : '}, {text: phdVariables.phdComment3} ]}
    const thesisDirectorComment3: Content = { text: [{text : 'Thesis director comment : '}, {text: phdVariables.thesisDirectorComment3} ]}
    const thesisCoDirectorComment3: Content = phdVariables.thesisCoDirectorName ?
        { text: [{text : 'Thesis co-director comment : '}, {text: phdVariables.thesisCoDirectorComment3} ]} : ""
    const commonComment3: Content = { text: [{text : 'Common comment : '}, {text: phdVariables.commonComment3},seperator ]}
    const comment4: Content = [{text: 'Student’s scientific and career development'  , bold: true}]
    const phdComment4: Content = { text: [{text : 'Doctoral student comment : '}, {text: phdVariables.phdComment4} ]}
    const thesisDirectorComment4: Content = { text: [{text : 'Thesis director comment : '}, {text: phdVariables.thesisDirectorComment4} ]}
    const thesisCoDirectorComment4: Content = phdVariables.thesisCoDirectorName ?
        { text: [{text : 'Thesis co-director comment : '}, {text: phdVariables.thesisCoDirectorComment4} ]} : ""
    const commonComment4: Content = { text: [{text : 'Common comment : '}, {text: phdVariables.commonComment4},seperator ]}
    const comment5: Content = [{text: 'Laboratory organization'  , bold: true}]
    const phdComment5: Content = { text: [{text : 'Doctoral student comment : '}, {text: phdVariables.phdComment5} ]}
    const thesisDirectorComment5: Content = { text: [{text : 'Thesis director comment : '}, {text: phdVariables.thesisDirectorComment5} ]}
    const thesisCoDirectorComment5: Content = phdVariables.thesisCoDirectorName ?
        { text: [{text : 'Thesis co-director comment : '}, {text: phdVariables.thesisCoDirectorComment5} ]} : ""
    const commonComment5: Content = { text: [{text : 'Common comment : '}, {text: phdVariables.commonComment5},seperator ]}
    const comment6: Content = [{text: 'Any other specific points'  , bold: true}]
    const phdComment6: Content = { text: [{text : 'Doctoral student comment : '}, {text: phdVariables.phdComment6} ]}
    const thesisDirectorComment6: Content = { text: [{text : 'Thesis director comment : '}, {text: phdVariables.thesisDirectorComment6} ]}
    const thesisCoDirectorComment6: Content = phdVariables.thesisCoDirectorName ?
        { text: [{text : 'Thesis co-director comment : '}, {text: phdVariables.thesisCoDirectorComment6} ]} : ""
    const commonComment6: Content = { text: [{text : 'Common comment : '}, {text: phdVariables.commonComment6},seperator ]}
    return [
        section,
        intro,
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
