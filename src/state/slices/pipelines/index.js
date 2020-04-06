import pipelines from './pipelines.slice';
import { pausePipeline, rerunRaw, resumePipeline, stopPipeline } from './pipelines.thunks';

const pipelineSlice = {
  ...pipelines,
  thunks: { rerunRaw, stopPipeline, pausePipeline, resumePipeline },
};

export default pipelineSlice;
