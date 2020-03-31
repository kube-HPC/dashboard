import { createSelector } from '@reduxjs/toolkit';
import { areEqualGraphs } from '@utils';
import { useSelector } from 'react-redux';

const graphSelector = createSelector(
  state => state.jobs.selected,
  state => state.jobs.dataSource,
  (selected, dataSource) => {
    const graph = selected
      ? dataSource.find(({ graph: { jobId } }) => jobId === selected).graph
      : null;

    if (graph) {
      const { nodes, edges, timestamp, jobId } = graph;
      return { nodes, edges, timestamp, jobId };
    }

    return null;
  },
);

const useGraph = () => {
  const selected = useSelector(graphSelector, areEqualGraphs);

  return { selected };
};

export default useGraph;
