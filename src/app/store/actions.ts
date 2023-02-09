import { ApiServiceService } from './../utils/api-service.service';
import { AxiosInstance } from 'axios';
import { Injectable } from '@angular/core';
import { createAction, Store } from '@ngrx/store';

export const TASK_ACTION = {
  GET_TASKS: 'GET_TASKS',
  ADD_TASK: 'ADD_TASK',
  DELETE_TASK: 'DELETE_TASK',
  SET_LOADING: 'SET_LOADING',
  GET_SINGLE_TASK: 'GET_SINGLE_TASK',
};

export const getAll = createAction(TASK_ACTION.GET_TASKS, (response) => ({
  payload: response,
}));
export const setLoading = createAction(TASK_ACTION.SET_LOADING);
export const addTask = createAction(TASK_ACTION.ADD_TASK, (task) => task);
export const deleteTask = createAction(TASK_ACTION.DELETE_TASK, (id) => ({
  payload: id,
}));

export const getSingleTask = createAction(
  TASK_ACTION.GET_SINGLE_TASK,
  (id) => ({
    payload: id,
  })
);

@Injectable()
export class TodoServiceService {
  apiCall: AxiosInstance;

  constructor(ApiServiceService: ApiServiceService, private store: Store) {
    this.apiCall = ApiServiceService.Axios;
  }

  async getTasks(): Promise<void> {
    this.store.dispatch(setLoading());
    const response = await this.apiCall.get<ITask[]>('/todos?userId=1');
    this.store.dispatch(getAll(response.data.reverse()));
    this.store.dispatch(setLoading());
  }

  addTask(task: ITask): void {
    this.store.dispatch(addTask(task));
  }

  deleteTask(id?: number): void {
    this.store.dispatch(deleteTask(id));
  }

  getSingleTaskById(id: string): void {
    this.store.dispatch(getSingleTask(id));
  }
}

type Keys = keyof typeof TASK_ACTION;

export type TASK_ACTION = (typeof TASK_ACTION)[Keys];

export type TASK_ACTION_TYPE = { type: TASK_ACTION; payload?: ITask | ITask[] };
