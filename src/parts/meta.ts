import {TDocumentInformation as TDocumentInformationPDFMake} from "pdfmake/interfaces"
import {IInputVariables} from "zeebe-node"


interface FormioMetadata {
    timezone?: string;
    offset?: number;
    origin?: string;
    referrer?: string;
    browserName?: string;
    userAgent?: string;
    pathName?: string;
    onLine?: boolean;
}

interface TDocumentInformation extends TDocumentInformationPDFMake {
    /** every metadata for every form fulfilled */
    metadata?: string | FormioMetadata;
}

export default function getMetaData(phdVariables: IInputVariables) {
    const info : TDocumentInformation = {
        title: 'awesome Document',
        author: 'john doe',
        subject: 'subject of document',
        keywords: 'keywords for document',
        metadata: `${JSON.stringify(phdVariables.metadata)}`,
    }

    return info
}
