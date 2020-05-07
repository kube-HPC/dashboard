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

  const graph = useSelector(selectedGraphSelector, areEqualGraphs);
  const taskId = useSelector(state => state.jobs.taskId);

  const [logs, setLogs] = useState(null);

  useEffect(() => {
    const fetchLogs = async () => {
      const { payload } = await getLogs();
      const areLogsAvailable = payload?.[0]?.timestamp;
      setLogs(areLogsAvailable ? payload : null);
    };

    if (taskId) {
      fetchLogs();
    }
  }, [getLogs, taskId]);

  return { graph, logs, taskId };
};

export default useGraph;
