import PIPELINE_STATUS from '@hkube/consts/lib/pipeline-statuses';
import { areEqualGraphs, entrySelector, graphSelector, progressSelector } from '@utils';
import isEqual from 'lodash.isequal';
import { useSelector } from 'react-redux';
import useActions from './useActions';

const useJob = jobId => {
  const isSelected = useSelector(state => state.jobs.selected === jobId);
  const job = useSelector(entrySelector(jobId), isEqual);
  const jobGraph = useSelector(graphSelector(jobId), areEqualGraphs);
  const { nodesStats, priority, progress } = useSelector(progressSelector(jobId), isEqual);

  const {
    jobs: { select: onSelect },
  } = useActions();

  return {
    job,
    isSelected,
    doShowDetails: job?.status !== PIPELINE_STATUS.COMPLETED,
    onSelect,
    jobDetails: {
      nodesStats,
      priority,
      progress,
      jobGraph,
    },
  };
};

export default useJob;
