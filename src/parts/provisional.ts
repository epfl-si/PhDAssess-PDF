import {Content} from "pdfmake/interfaces"



export default function getProvisional() {

    const ongoing: Content = [{text: 'Please note that it is not the final version of the annual report because the process is still ongoing.',  bold: true} ]

    return [
      ongoing,
    ]
}
