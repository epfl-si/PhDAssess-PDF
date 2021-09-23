import {ZBClient} from "zeebe-node";
import {Duration, ZBWorkerTaskHandler} from 'zeebe-node'
import debug_ from 'debug'
import {encrypt} from "./encryption";
import {makePDFString} from "./makePDF";
import sampleData from "./sample.json"

const debug = debug_('phd-assess/zeebeWorker')

export const zBClient = new ZBClient({
  pollInterval: Duration.seconds.of(10),
})

const taskType = process.env.ZEEBE_TASK_TYPE ? process.env.ZEEBE_TASK_TYPE : ''

const handler: ZBWorkerTaskHandler = async (
  job,
  _,
  worker
  ) => {
  worker.debug(`Task variables ${job.variables}`)
  debug(`Job "${taskType}" started`);

  // TODO: use job variables :
  // const jobVariables = decryptVariables(job.variables)
  //const generatedPDF: string = await makePDFString(jobVariables)
  const generatedPDF: string = await makePDFString(sampleData)

  debug(`Job is complete, adding the data PDF to it (a b65 encrypted string`);

  const updateBrokerVariables = {
    PDF: encrypt(generatedPDF),
  }

  return job.complete(updateBrokerVariables)
}

export const startWorker = () => {
  console.log("starting worker")
  console.log(`worker started, awaiting for ${taskType} jobs...`)
  return zBClient.createWorker({
    taskType: taskType,
    maxJobsToActivate: 5,
    // Set timeout, the same as we will ask yourself if the job is still up
    timeout: Duration.minutes.of(2),
    // load every job into the in-memory server db
    taskHandler: handler
  })
}

startWorker()
