import { TASK_ACTION, TASK_ACTION_TYPE } from './actions';

const initialState: TASK_STATE = {
  loading: false,
  tasks: [
    {
      id: 1,
      title: 'title',
      completed: false,
    },
  ],
  task: {},
};

export function TasksReducers(
  state: TASK_STATE = initialState,
  action: TASK_ACTION_TYPE | T
) {
  switch (action.type) {
    case TASK_ACTION.SET_LOADING:
      return {
        ...state,
        loading: !state.loading,
      };

    case TASK_ACTION.GET_TASKS:
      return {
        ...state,
        tasks: action.payload,
      };
    case TASK_ACTION.ADD_TASK: {
      const last = state.tasks[0];
      return {
        ...state,
        tasks: [{ ...action, id: Number(last?.id) + 1 }, ...state.tasks],
      };
    }
    case TASK_ACTION.DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };

    case TASK_ACTION.GET_SINGLE_TASK: {
      console.log({
        id: action.payload,
        found: state.tasks?.find((task) => task.id === +action.payload),
      });
      return {
        ...state,
        task: state.tasks?.find((task) => task.id === +action.payload),
      };
    }
    default:
      return state;
  }
}
