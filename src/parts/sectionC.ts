import {Content} from "pdfmake/interfaces"
import {IInputVariables} from "zeebe-node"
import {seperator} from "./utils"


export default function getSectionC(phdVariables: IInputVariables) {

    const section: Content = [{text: 'Progress assessment ', style: 'header'}]
    const intro: Content = { text: [{ text:'To be completed independently by the doctoral candidate and thesis director (and co-director if applicable), then discussed and approved by both during the Annual Report meeting. Progress evaluation is not confidential. During completion '}, seperator,
                           { text:'Aims on the doctoral candidate side: \n'},
                           { text:'  -	to assess how the doctoral candidate views their own progress and skills\n', italics: true},
                           { text:'  -	to identify and communicate to the thesis director in what areas the doctoral candidate seeks more input or help', italics: true}, seperator,
                           { text:'Aims on the thesis director (and co-director if applicable) side:\n'},
                           { text:'  -	to ensure that your doctoral candidate know how they are performing overall according to you\n', italics: true},
                           { text:'  -	to communicate what you think strengths and weaknesses are towards completing a PhD\n', italics: true},
                           { text:'  -	to communicate what you think needs to be improved\n', italics: true},
                           { text:'  -	to ensure that career issues are discussed at least once per year', italics: true}, seperator,
                           { text:'Please use the comments box to briefly assess the progress and further elaborate any specific issues. '},seperator]}
    return [
        section,
    ]
}
