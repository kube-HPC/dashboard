// @flow
import type { JobStateProp } from './slices';

export { actions } from './store';

export type AppState = {
  jobs: JobStateProp,
};
