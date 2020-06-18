import { addExperiment, deleteExperiment, downloadResults, getLogs } from './job.thunks';
import jobs from './jobs.slice';

const jobsSlice = {
  ...jobs,
  thunks: { downloadResults, getLogs, addExperiment, deleteExperiment },
};

export type { JobStateProp } from './jobs.slice';
export default jobsSlice;
