import { ApiServiceService } from './../utils/api-service.service';
import { AxiosInstance } from 'axios';
import { Injectable } from '@angular/core';
import { Action, createAction } from '@ngrx/store';

export const TASK_ACTION = {
  GET_TASKS: 'GET_TASKS',
  ADD_TASK: 'ADD_TASK',
  DELETE_TASK: 'DELETE_TASK',
  SET_LOADING: 'SET_LOADING',
};
export const getAll = createAction(TASK_ACTION.GET_TASKS, (response) => ({
  payload: response,
}));
export const setLoading = createAction(TASK_ACTION.SET_LOADING);
// export const addTask = createAction(TASK_ACTION.ADD_TASK);
// export const deleteTask = createAction(TASK_ACTION.DELETE_TASK);

type Keys = keyof typeof TASK_ACTION;

export type TASK_ACTION = (typeof TASK_ACTION)[Keys];

export type TASK_ACTION_TYPE = { type: TASK_ACTION; payload?: ITask | ITask[] };

@Injectable()
export class TodoServiceService {
  apiCall: AxiosInstance;

  constructor(ApiServiceService: ApiServiceService) {
    this.apiCall = ApiServiceService.Axios;
    this.getTasks();
  }

  async getTasks(): Promise<ITask[]> {
    const response = await this.apiCall.get<ITask[]>('/todos?userId=1');
    return response.data;
  }
}
