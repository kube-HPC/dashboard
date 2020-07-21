import { areEqualGraphs, graphSelector, taskIdStatsSelector } from '@utils';
import isEqual from 'lodash.isequal';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import useActions from './useActions';

const useGraph = () => {
  const {
    jobs: { getLogs },
  } = useActions();

  const graph = useSelector(graphSelector, areEqualGraphs);
  const task = useSelector(taskIdStatsSelector, isEqual);

  const [logs, setLogs] = useState(null);

  useEffect(() => {
    const fetchLogs = async () => {
      const { payload } = await getLogs();
      const areLogsAvailable = payload?.[0]?.timestamp;
      setLogs(areLogsAvailable ? payload : null);
    };

    if (task.id) {
      fetchLogs();
    }
  }, [getLogs, task]);

  return { graph, logs, task, areLogsValid: logs !== null };
};

export default useGraph;
