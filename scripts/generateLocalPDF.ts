import {PhDAssessVariables} from "phd-assess-meta/types/variables";
import { makePDFFile } from '../src/makePDF'
import sampleData from "../src/sample.json"
import samplePdfType from "../src/samplePdfType.json"


makePDFFile(sampleData as unknown as PhDAssessVariables, samplePdfType)
