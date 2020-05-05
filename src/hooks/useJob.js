import { PANEL, THEME } from '@constants';
import { areEqualGraphs, entrySelector, graphSelector, progressSelector } from '@utils';
import isEqual from 'lodash.isequal';
import { useCallback, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import tw from 'twin.macro';
import useActions from './useActions';
import useEye from './useEye';

const useJob = jobId => {
  const isSelected = useSelector(state => state.jobs.selected === jobId);
  const jobEntry = useSelector(entrySelector(jobId), isEqual);
  const jobGraph = useSelector(graphSelector(jobId), areEqualGraphs);
  const { nodesStats, priority, progress, status } = useSelector(progressSelector(jobId), isEqual);
  const themeMode = useSelector(state => state.theme.mode);

  const [isRevealed, setRevealed] = useState(false);

  const { isEyed } = useEye(jobId);

  const whileHover = useMemo(
    () => (themeMode === THEME.mode.light ? tw`shadow-md` : tw`shadow-mdLight`),
    [themeMode],
  );

  const {
    jobs: { select },
    panel: { set },
  } = useActions();

  const { types, ...job } = jobEntry;

  const onSelect = useCallback(() => {
    select(jobId);
    if (isSelected) {
      set(PANEL.welcome);
    }
  }, [select, jobId, isSelected, set]);

  const onRevealStart = useCallback(() => setRevealed(true), []);
  const onRevealEnd = useCallback(() => setRevealed(false), []);

  return {
    isRevealed,
    isSelected,
    isShowDetails: isEyed,
    job,
    onRevealEnd,
    onRevealStart,
    onSelect,
    types,
    whileHover,
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
