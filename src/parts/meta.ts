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
  tentativeThesisTitle?: string;
  doctoralProgram?: string;
  thesisDirector?: string;
  thesisCoDirector?: string;
  programDirector?: string;
  taDuties?: string;
  creditsCompleted?: string;
  creditsPlanned?: string;
  doctoralProgramName?: string;
  dateOfEnrolment?: string;
  annualReportOf?: string;
  phdStudentName?: string;
  phdStudentSciper?: string;
  thesisDirectorName?: string;
  thesisCoDirectorName?: string;
  programDirectorName?: string;
  dateOfCandidacyExam?: string;
  taDutiesHoursAndOrCoursesCompleted  : string;
  creditsNeeded?:  string;
  totalCreditsObtained?:string;
  totalCreditsPlanned?: string;
  goalsOfTheThesis?: string;
  researchProgressDuringThePastYear?: string;
  haveTheObjectivesChangedInThePastYearIfSoWhyAndHow?: string;
  researchObjectivesForTheNextYear?: string;
  timelineOfThePlannedWorkForTheNextYear?: string;
  scientificOutput?: string;
  educationalActivities?: string;
  phdComment1?: string;
  phdComment2?: string;
  phdComment3?: string;
  phdComment4?: string;
  phdComment5?: string;
  phdComment6?: string;
  thesisDirectorComment1?: string;
  thesisDirectorComment2?: string;
  thesisDirectorComment3?: string;
  thesisDirectorComment4?: string;
  thesisDirectorComment5?: string;
  thesisDirectorComment6?: string;
  thesisCoDirectorComment1?: string;
  thesisCoDirectorComment2?: string;
  thesisCoDirectorComment3?: string;
  thesisCoDirectorComment4?: string;
  thesisCoDirectorComment5?: string;
  thesisCoDirectorComment6?: string;
  commonComment1?: string;
  commonComment2?: string;
  commonComment3?: string;
  commonComment4?: string;
  commonComment5?: string;
  commonComment6?: string;
  generalAppraisalOfTheProgress?: string;
  thesisCoDirectorDateOfReview?: string;
  thesisCoDirectorComment?: string;
  agreeThesisCoDirector?: string;
  thesisDirectorDateOfReview?: string;
  thesisDirectorComment?: string;
  agreeThesisDirector?: string;
  phdDateOfReview?: string;
  phdComment?:  string;
  agreePhd?: string;
  programDirectorDate?: string;
  programDirectorComment?: string;
  mentorDate?:string;
  phdDate?: string;
  activityLogs?: string;
}

export default function getMetaData(phdVariables: IInputVariables) : TDocumentMetaInformation {
    return {
        title: 'Annual Report',
        author:  phdVariables.phdStudentName +' (' + phdVariables.phdStudentSciper + ')',
        subject: 'Annual report of ' + phdVariables.year,
        keywords: phdVariables.doctoralProgramName,
        doctoralProgram : phdVariables.doctoralProgramName,
        dateOfEnrolment : phdVariables.dateOfEnrolment,
        annualReportOf : phdVariables.year,
        phdStudentName : phdVariables.phdStudentName,
        phdStudentSciper : phdVariables.phdStudentSciper,
        tentativeThesisTitle : phdVariables.tentativeThesisTitle,
        thesisDirectorName : phdVariables.phdVariables,
        thesisCoDirectorName : phdVariables.thesisCoDirectorName,
        programDirectorName : phdVariables.programDirectorName,
        dateOfCandidacyExam : phdVariables.dateOfCandidacyExam,
        taDutiesHoursAndOrCoursesCompleted : phdVariables.taDutiesHoursAndOrCoursesCompleted,
        creditsNeeded : phdVariables.creditsNeeded,
        totalCreditsObtained : phdVariables.totalCreditsObtained,
        totalCreditsPlanned : phdVariables.totalCreditsPlanned,
        goalsOfTheThesis : phdVariables.goalsOfTheThesis,
        researchProgressDuringThePastYear : phdVariables.researchProgressDuringThePastYear,
        haveTheObjectivesChangedInThePastYearIfSoWhyAndHow : phdVariables.haveTheObjectivesChangedInThePastYearIfSoWhyAndHow,
        researchObjectivesForTheNextYear : phdVariables.researchObjectivesForTheNextYear,
        timelineOfThePlannedWorkForTheNextYear :  phdVariables.timelineOfThePlannedWorkForTheNextYear,
        scientificOutput : phdVariables.scientificOutput,
        educationalActivities : phdVariables.educationalActivities,
        phdComment1 : phdVariables.phdComment1,
        phdComment2 : phdVariables.phdComment2,
        phdComment3 : phdVariables.phdComment3,
        phdComment4 : phdVariables.phdComment4,
        phdComment5 : phdVariables.phdComment5,
        phdComment6 : phdVariables.phdComment6,
        thesisDirectorComment1 : phdVariables.thesisDirectorComment1,
        thesisDirectorComment2 : phdVariables.thesisDirectorComment2,
        thesisDirectorComment3 : phdVariables.thesisDirectorComment3,
        thesisDirectorComment4 : phdVariables.thesisDirectorComment4,
        thesisDirectorComment5 : phdVariables.thesisDirectorComment5,
        thesisDirectorComment6 : phdVariables.thesisDirectorComment6,
        thesisCoDirectorComment1 : phdVariables.thesisCoDirectorComment1,
        thesisCoDirectorComment2 : phdVariables.thesisCoDirectorComment2,
        thesisCoDirectorComment3 : phdVariables.thesisCoDirectorComment3,
        thesisCoDirectorComment4 : phdVariables.thesisCoDirectorComment4,
        thesisCoDirectorComment5 : phdVariables.thesisCoDirectorComment5,
        thesisCoDirectorComment6 : phdVariables.thesisCoDirectorComment6,
        commonComment1 : phdVariables.commonComment1,
        commonComment2 : phdVariables.commonComment2,
        commonComment3 : phdVariables.commonComment3,
        commonComment4 : phdVariables.commonComment4,
        commonComment5 : phdVariables.commonComment5,
        commonComment6 : phdVariables.commonComment6,
        generalAppraisalOfTheProgress : phdVariables.generalAppraisalOfTheProgress,
        thesisCoDirectorDateOfReview : phdVariables.thesisCoDirectorDateOfReview,
        thesisCoDirectorComment : phdVariables.thesisCoDirectorComment,
        agreeThesisCoDirector : phdVariables.agreeThesisCoDirector,
        thesisDirectorDateOfReview : phdVariables.thesisDirectorDateOfReview,
        thesisDirectorComment : phdVariables.thesisDirectorComment,
        agreeThesisDirector : phdVariables.agreeThesisDirector,
        phdDateOfReview : phdVariables.phdDateOfReview,
        phdComment : phdVariables.phdComment,
        agreePhd : phdVariables.agreePhd,
        programDirectorDate : phdVariables.programDirectorDate,
        programDirectorComment : phdVariables.programDirectorComment,
        mentorDate : phdVariables.mentorDate,
        phdDate : phdVariables.phdDate,

        activityLogs: JSON.stringify(phdVariables.activityLogs),
    }
}
