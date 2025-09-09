import {TDocumentInformation as TDocumentInformationPDFMake} from "pdfmake/interfaces";

import type {PhDAssessVariables} from "phd-assess-meta/types/variables";


export interface TDocumentMetaInformation extends TDocumentInformationPDFMake, Partial<PhDAssessVariables> {
  /** every metadata for every form fulfilled */
  doctoralProgram?: string;  // FIXME: not sure why this one is needed
}

export default function getMetaData(phdVariables: PhDAssessVariables): TDocumentMetaInformation {
    return {
      ...phdVariables,
      title: 'Annual Report',
      author:  phdVariables.phdStudentName +' (' + phdVariables.phdStudentSciper + ')',
      subject: 'Annual report of ' + phdVariables.year,
    }
}
