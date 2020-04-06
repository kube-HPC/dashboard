import { downloadPathSelector, pipelineSelector } from '@utils';
import isEqual from 'lodash.isequal';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import useActions from './useActions';

const useJobActions = jobId => {
  const {
    jobs: { downloadResults },
    pipelines: { rerunRaw },
  } = useActions();

  const pipeline = useSelector(pipelineSelector(jobId), isEqual);
  const downloadPath = useSelector(downloadPathSelector(jobId));

  const actions = useMemo(() => {
    const { jobId } = pipeline;
    const rerunAction = () => {
      rerunRaw(pipeline);
    };
    const downloadAction = () => {
      downloadPath && downloadResults({ jobId, downloadPath });
    };
    return [rerunAction, downloadAction];
  }, [rerunRaw, pipeline, downloadPath, downloadResults]);

  return actions;
};

export default useJobActions;
