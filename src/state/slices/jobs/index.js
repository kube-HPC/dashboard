import { downloadResults } from './job.thunks';
import jobs from './jobs.slice';

const jobsSlice = { ...jobs, thunks: { downloadResults } };

export default jobsSlice;
