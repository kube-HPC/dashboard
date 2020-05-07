import { downloadResults, getLogs } from './job.thunks';
import jobs from './jobs.slice';

const jobsSlice = { ...jobs, thunks: { downloadResults, getLogs } };

export default jobsSlice;
