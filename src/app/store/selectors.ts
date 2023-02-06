export const STORE_SELECTOR = {
  TASKS: (state: T) => state.tasks.tasks,
  LOADING: (state: TASK_STATE) => state.loading,
};
