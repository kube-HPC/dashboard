import { PANEL } from '@constants';
import { areEqualGraphs, entrySelector, graphSelector, progressSelector } from '@utils';
import isEqual from 'lodash.isequal';
import { useSelector } from 'react-redux';
import useActions from './useActions';
import useEye from './useEye';

const useJob = jobId => {
  const isSelected = useSelector(state => state.jobs.selected === jobId);
  const jobEntry = useSelector(entrySelector(jobId), isEqual);
  const jobGraph = useSelector(graphSelector(jobId), areEqualGraphs);
  const { nodesStats, priority, progress, status } = useSelector(progressSelector(jobId), isEqual);

  const { isEyed } = useEye(jobId);

  const {
    jobs: { select },
    panel: { set },
  } = useActions();

  const onSelect = () => {
    select(jobId);
    if (isSelected) {
      set(PANEL.welcome);
    }
  };

  const { types, ...job } = jobEntry;

  return {
    isSelected,
    isShowDetails: isEyed,
    job,
    onSelect,
    types,
    jobDetails: {
      nodesStats,
      priority,
      progress,
      jobGraph,
      status,
    },
  };
};

export default useJob;
