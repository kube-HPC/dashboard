import { PANEL } from '@constants';

export const set = (state, { payload }) => {
  const prevPanel = state.value;
  if (prevPanel === PANEL.jobs && payload === PANEL.jobs) {
    // Don't toggle on switching between jobs
    return;
  } else {
    state.value = prevPanel === payload ? null : payload;
  }
};

export const toggle = state => {
  state.expanded = !state.expanded;
};
