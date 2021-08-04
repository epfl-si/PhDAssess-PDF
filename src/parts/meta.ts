import {IInputVariables} from "zeebe-node"
import {TDocumentInformation as TDocumentInformationPDFMake} from "pdfmake/interfaces";

/*
interface FormioActivityLog {
  timezone?: string;
  offset?: number;
  origin?: string;
  referrer?: string;
  browserName?: string;
  userAgent?: string;
  pathName?: string;
  onLine?: boolean;
}*/

export interface TDocumentMetaInformation extends TDocumentInformationPDFMake {
  /** every metadata for every form fulfilled */
  activityLogs?: string;
}

export default function getMetaData(phdVariables: IInputVariables) : TDocumentMetaInformation {
    return {
        title: 'awesome Document',
        author: 'john doe',
        subject: 'subject of document',
        keywords: 'keywords for document',
        activityLogs: JSON.stringify(phdVariables.activityLogs),
    }
}
