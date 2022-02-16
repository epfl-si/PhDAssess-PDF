import {Content} from "pdfmake/interfaces"
import {IInputVariables} from "zeebe-node"
import {seperator} from "./utils"


export default function getSectionDAgree(phdVariables: IInputVariables) {

    if (phdVariables.agreeThesisCoDirector == "Thesis co-director agrees") {
        var agreeThesisCoDirectorOn = " agreed on the report on "
    }
    else {
        var agreeThesisCoDirectorOn = " did not agree on the report on "
    }
    const agreeThesisCoDirector: Content = phdVariables.thesisCoDirectorName ?
        { text:[{text: 'Thesis co-director',  bold: true}, {text : agreeThesisCoDirectorOn}, {text: phdVariables.thesisCoDirectorDateOfReview} ]} : ""
    const thesisCoDirectorComment: Content = phdVariables.thesisCoDirectorName ?
        { text: [{text : 'Comment: '}, {text: phdVariables.thesisCoDirectorComment},seperator ]} : ""
    if (phdVariables.agreeThesisDirector == "Thesis director agrees") {
          var agreeThesisDirectorOn = " agreed on the report on "
        }
    else {
          var agreeThesisDirectorOn = " did not agree on the report on "
        }
    const agreeThesisDirector: Content = { text:[{text: 'Thesis director ',  bold: true}, {text : agreeThesisDirectorOn}, {text: phdVariables.thesisDirectorDateOfReview} ]}
    const thesisDirectorComment: Content = { text: [{text : 'Comment: '}, {text: phdVariables.thesisDirectorComment},seperator ]}
    if (phdVariables.agreePhd == "Doctoral student agrees") {
        var agreeaPhdOn = " agreed on the report on "
    }
    else {
        var agreeaPhdOn = " did not agree on the report on "
    }
    const agreePhd: Content = { text:[{text: 'Doctoral student',  bold: true}, {text : agreeaPhdOn}, {text: phdVariables.phdDateOfReview} ]}
    const phdComment: Content = { text: [{text : 'Comment: '}, {text: phdVariables.phdComment},seperator ]}


    return [
        agreeThesisCoDirector,
        thesisCoDirectorComment,
        agreeThesisDirector,
        thesisDirectorComment,
        agreePhd,
        phdComment,
    ]
}
