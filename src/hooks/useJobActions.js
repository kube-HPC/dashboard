import { iconNames } from '@icons';
import { downloadPathSelector, pipelineSelector, statusSelector } from '@utils';
import isEqual from 'lodash.isequal';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import useActions from './useActions';

const { redo, fileDownload, stop, pause, play } = iconNames;

const icons = [redo, play, pause, stop, fileDownload];

const useJobActions = jobId => {
  const {
    jobs: { downloadResults },
    pipelines: { rerunRaw, stopPipeline, resumePipeline, pausePipeline },
  } = useActions();

  const pipeline = useSelector(pipelineSelector(jobId), isEqual);
  const downloadPath = useSelector(downloadPathSelector(jobId));
  const { canBeStopped, canBePaused } = useSelector(statusSelector(jobId));

  const actions = useMemo(() => {
    const { jobId, name } = pipeline;
    const payload = { jobId, name };
    const rerunAction = () => rerunRaw(pipeline);
    const downloadAction = () => downloadPath && downloadResults({ jobId, downloadPath });
    const stopAction = () => stopPipeline(payload);
    const resumeAction = () => resumePipeline(payload);
    const pauseAction = () => pausePipeline(payload);

    return [rerunAction, resumeAction, pauseAction, stopAction, downloadAction];
  }, [
    pipeline,
    rerunRaw,
    downloadPath,
    downloadResults,
    stopPipeline,
    resumePipeline,
    pausePipeline,
  ]);

  return { icons, actions };
};

export default useJobActions;
