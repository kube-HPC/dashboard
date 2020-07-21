// @flow
import { createSelector } from '@reduxjs/toolkit';
import type { ErrorLogType } from '@slices';
import type { AppState } from 'state';

export const errorsSelector = createSelector(
  (state: AppState): ErrorLogType[] => state.errors.logs,
  (logs: ErrorLogType[]) => logs,
);
