import PIPELINE_STATUS from '@hkube/consts/lib/pipeline-statuses';
import { areEqualGraphs, entrySelector, graphSelector, progressSelector } from '@utils';
import isEqual from 'lodash.isequal';
import { useCallback, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import tw from 'twin.macro';
import useActions from './useActions';

const onHoverShadow = tw`shadow-md`.boxShadow;

const useJob = jobId => {
  const isSelected = useSelector(state => state.jobs.selected === jobId);
  const jobEntry = useSelector(entrySelector(jobId), isEqual);
  const jobGraph = useSelector(graphSelector(jobId), areEqualGraphs);
  const { nodesStats, priority, progress } = useSelector(progressSelector(jobId), isEqual);

  const [isRevealed, setRevealed] = useState(false);

  const {
    jobs: { select },
  } = useActions();

  const { types, ...job } = jobEntry;

  const whileHover = useMemo(() => ({ boxShadow: onHoverShadow }), []);
  const onSelect = useCallback(() => select(jobId), [select, jobId]);
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
