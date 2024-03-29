import {ZBClient} from "zeebe-node";
import {Duration, ZBWorkerTaskHandler} from 'zeebe-node'
import debug_ from 'debug'
import {decryptVariables, encrypt} from "./encryption";
import {makePDFString} from "./makePDF";
import {flatPick} from "./utils";

const version = require('./version.js');
const debug = debug_('phd-assess/zeebeWorker')


export const zBClient = new ZBClient({
  pollInterval: Duration.seconds.of(10),
})

const taskType = process.env.ZEEBE_TASK_TYPE ? process.env.ZEEBE_TASK_TYPE : ''

// list which variables are not encrypted.
const alreadyDecryptedVariables = [
  'dashboardDefinition',
  'uuid',
  'notifySubject',
  'notifyMessage',
]

const handler: ZBWorkerTaskHandler = async (
  job
  ) => {
  debug(`Task variables ${job.variables}`)
  debug(`Job "${taskType}" started`);

  console.log("Received and starting task", {
    taskType,
    job: flatPick(job,
      [
        'key',
        'processInstanceKey',
        'processDefinitionVersion',
        'elementId',
        'worker',
        'variables.created_at',
        'variables.created_by',
      ]
    )
  })

  const jobVariables = decryptVariables(job, alreadyDecryptedVariables)

  // pdfType can come from two sources. As a custom header if it comes from an isolated activity, or
  // as a variable if it comes from the notification subprocess
  // @ts-ignore
  const generatedPDF: string = await makePDFString(jobVariables, job.customHeaders.pdfType ?? jobVariables.pdfType)

  debug(`Job is complete, adding the data PDF to it (a b64 encrypted string`);

  const updateBrokerVariables = {
    PDF: encrypt(generatedPDF),
  }

  return job.complete(updateBrokerVariables)
}

export const startWorker = () => {
  console.log(`starting phd-assess-pdf version ${version}...`)
  console.log("starting worker...")

  const worker = zBClient.createWorker({
    taskType: taskType,
    maxJobsToActivate: 5,
    // Set timeout, the same as we will ask yourself if the job is still up
    timeout: Duration.minutes.of(2),
    // load every job into the in-memory server db
    taskHandler: handler
  })

  console.log(`worker started, awaiting for ${taskType} jobs...`)
  return worker
}
