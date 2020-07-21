import { createSelector } from '@reduxjs/toolkit';

export const panelSelector = createSelector(
  state => state.dashboard.panel,
  panel => panel,
);

export const filterSelector = createSelector(
  state => state.dashboard.filters,
  filter => filter,
);
