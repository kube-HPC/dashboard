import { PANEL, THEME } from '@constants';
import PIPELINE_STATUS from '@hkube/consts/lib/pipeline-statuses';
import { areEqualGraphs, entrySelector, graphSelector, progressSelector } from '@utils';
import isEqual from 'lodash.isequal';
import { useCallback, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import tw from 'twin.macro';
import useActions from './useActions';

const useJob = jobId => {
  const isSelected = useSelector(state => state.jobs.selected === jobId);
  const jobEntry = useSelector(entrySelector(jobId), isEqual);
  const jobGraph = useSelector(graphSelector(jobId), areEqualGraphs);
  const { nodesStats, priority, progress } = useSelector(progressSelector(jobId), isEqual);
  const themeMode = useSelector(state => state.theme.mode);

  const [isRevealed, setRevealed] = useState(false);

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
    set(PANEL.jobs);
  }, [select, jobId, set]);

  const onHoverStart = useCallback(() => setRevealed(true), []);
  const onHoverEnd = useCallback(() => setRevealed(false), []);

  return {
    job,
    types,
    isSelected,
    whileHover,
    onHoverStart,
    onHoverEnd,
    isRevealed,
    isCompleted: job?.status !== PIPELINE_STATUS.ACTIVE,
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
