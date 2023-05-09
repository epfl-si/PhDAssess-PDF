import type {PhDAssessVariables} from "phd-assess-meta/types/variables";
import { makePDFFile } from '../src/makePDF'

// @ts-ignore
import sampleData from "../src/sample.json"
// @ts-ignore
import samplePdfType from "../src/samplePdfType.json"


makePDFFile(sampleData as unknown as PhDAssessVariables, samplePdfType)
