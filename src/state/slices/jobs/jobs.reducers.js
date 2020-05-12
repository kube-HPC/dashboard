export const select = (state, { payload: jobId }) => {
  state.selected = state.selected === jobId ? null : jobId;

  /* On Job Select, set default taskId as the first appeared node */
  if (state.selected) {
    const job = state.dataSource?.find(({ key }) => key === state.selected);
    const firstTaskId = job?.graph.nodes?.[0]?.taskId;
    state.taskId = firstTaskId;
  }
};

export const changeTaskId = (state, { payload: taskId }) => {
  if (state.taskId !== taskId) {
    state.taskId = taskId;
  }
};
