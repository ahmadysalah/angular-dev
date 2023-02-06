import { Action } from '@ngrx/store';
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
      console.log(action);
      return {
        ...state,
        tasks: action.payload,
      };

    default:
      return state;
  }
}
