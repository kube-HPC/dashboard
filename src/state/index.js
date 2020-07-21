// @flow
import type { ErrorStateProp, JobStateProp } from './slices';

export { actions } from './store';

export type AppState = {
  jobs: JobStateProp,
  errors: ErrorStateProp,
};
