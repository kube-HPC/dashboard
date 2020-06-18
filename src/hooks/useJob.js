import { PANEL } from '@constants';
import { areEqualGraphs, entrySelector, graphSelectorByJobId, progressSelector } from '@utils';
import isEqual from 'lodash.isequal';
import { useSelector } from 'react-redux';
import useActions from './useActions';
import useEye from './useEye';
import usePanel from './usePanel';

const options = { nodeFontSize: 15 };

const useJob = jobId => {
  const isSelected = useSelector(state => state.jobs.selected === jobId);
  const jobEntry = useSelector(entrySelector(jobId), isEqual);
  const jobGraph = useSelector(graphSelectorByJobId(jobId), areEqualGraphs);
  const { nodesStats, priority, progress, status } = useSelector(progressSelector(jobId), isEqual);

  const { isEyed } = useEye(jobId);
  const { set } = usePanel();

  const {
    jobs: { select },
  } = useActions();

  const onSelect = () => {
    select(jobId);
    if (isSelected) {
      set(PANEL.welcome);
    }
  };

  const { types, ...job } = jobEntry ?? { types: [] };

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
      options,
    },
  };
};

export default useJob;
