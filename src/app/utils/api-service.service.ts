import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable()
export class ApiServiceService {
  Axios = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
  });

  constructor() {
    this.Axios.interceptors.request.use(
      (config) => {
        // Do something before request is sent
        return config;
      },
      (error) => {
        // Do something with request error
        return Promise.reject(error);
      }
    );

    // Add a response interceptor
    this.Axios.interceptors.response.use(
      (response) => {
        // Do something with response data
        return response;
      },
      (error) => {
        // Do something with response error
        return Promise.reject(error);
      }
    );
  }
}
