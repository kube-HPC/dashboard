import { createSelector } from '@reduxjs/toolkit';
import { areEqualGraphs } from '@utils';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import useActions from './useActions';

const selectedGraphSelector = createSelector(
  state => state.jobs.selected,
  state => state.jobs.dataSource,
  (selected, dataSource) => {
    const graph = selected ? dataSource.find(job => job?.graph?.jobId === selected)?.graph : null;

    if (graph) {
      const { nodes, edges, timestamp, jobId } = graph;
      return { nodes, edges, timestamp, jobId };
    }

    return null;
  },
);

const useGraph = () => {
  const {
    jobs: { getLogs },
  } = useActions();

  const selected = useSelector(selectedGraphSelector, areEqualGraphs);

  const [logs, setLogs] = useState(null);

  const jobId = selected?.jobId;

  useEffect(() => {
    getLogs(jobId);
  }, [jobId, getLogs]);

  return { selected };
};

export default useGraph;
