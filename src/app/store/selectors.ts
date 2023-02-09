export const STORE_SELECTOR = {
  TASKS: (state: T): ITask[] => state.tasks.tasks,
  LOADING: (state: T) => state.tasks.loading,
  TASK: (state: T) => state.tasks.task,
};
