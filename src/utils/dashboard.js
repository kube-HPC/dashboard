import { createSelector } from '@reduxjs/toolkit';

export const panelSelector = createSelector(
  state => state.dashboard.panel,
  panel => panel,
);
