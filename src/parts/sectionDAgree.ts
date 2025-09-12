import {Content} from "pdfmake/interfaces"
import {IInputVariables} from "zeebe-node"
import {seperator} from "./utils"


export default function getSectionDAgree(phdVariables: IInputVariables) {

    const agreeThesisCoDirectorOn = (phdVariables.agreeThesisCoDirector == "Thesis co-director agrees") ?
      " agreed on the report on " :
      " did not agree on the report on "

    const agreeThesisCoDirector: Content = phdVariables.thesisCoDirectorDateOfReview ?
        { text:[{text: 'Thesis co-director',  bold: true}, {text : agreeThesisCoDirectorOn}, {text: phdVariables.thesisCoDirectorDateOfReview} ]} : ""
    const thesisCoDirectorComment: Content = phdVariables.thesisCoDirectorComment ?
        { text: [{text : 'Comment: '}, {text: phdVariables.thesisCoDirectorComment},seperator ]} : ""

    const agreeThesisDirectorOn = (phdVariables.agreeThesisDirector == "Thesis director agrees") ?
      " agreed on the report on " :
      " did not agree on the report on "

    const agreeThesisDirector: Content = phdVariables.thesisDirectorDateOfReview ?
        { text:[{text: 'Thesis director ',  bold: true}, {text : agreeThesisDirectorOn}, {text: phdVariables.thesisDirectorDateOfReview} ]} : ""
    const thesisDirectorComment: Content = phdVariables.thesisDirectorComment ?
        { text: [{text : 'Comment: '}, {text: phdVariables.thesisDirectorComment},seperator ]} : ""

    const agreePhdOn = (
      phdVariables.agreePhd == "Doctoral candidate agrees" || phdVariables.agreePhd == "Doctoral student agrees"
    ) ?
      " agreed on the report on " :
      " did not agree on the report on "

    const agreePhd: Content = { text:[{text: 'Doctoral candidate',  bold: true}, {text : agreePhdOn}, {text: phdVariables.phdDateOfReview} ]}
    const phdComment: Content =  phdVariables.phdComment ?
        { text: [{text : 'Comment: '}, {text: phdVariables.phdComment},seperator ]} : {text : '\n\n'}

    return [
        agreeThesisCoDirector,
        thesisCoDirectorComment,
        agreeThesisDirector,
        thesisDirectorComment,
        agreePhd,
        phdComment,
        seperator,
    ]
}
