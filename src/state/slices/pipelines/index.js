import pipelines from './pipelines.slice';
import { rerunRaw } from './pipelines.thunks';

const pipelineSlice = { ...pipelines, thunks: { rerunRaw } };

export default pipelineSlice;
