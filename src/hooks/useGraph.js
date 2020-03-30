import { createSelector } from '@reduxjs/toolkit';
import isEqual from 'lodash.isequal';
import { useSelector } from 'react-redux';

const graphSelector = createSelector(
  state => state.jobs.selected,
  state => state.jobs.dataSource,
  (selected, dataSource) =>
    selected ? dataSource.find(({ graph: { jobId } }) => jobId === selected).graph : null,
);

const useGraph = () => {
  const graph = useSelector(graphSelector, isEqual);
  return { graph };
};

export default useGraph;
