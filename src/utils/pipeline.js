import { createSelector } from '@reduxjs/toolkit';

export const pipelineSelector = currJobId =>
  createSelector(
    state => state.jobs,
    ({ dataSource }) => dataSource?.find(({ key }) => key === currJobId)?.pipeline,
  );
