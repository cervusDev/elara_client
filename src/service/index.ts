export * as Api from '.';
export * from './endpoints/login';
export * as ApiService from './api.service';

export type ErrorHandler = {
  response: {
    data: {
      message: string;
    }
  }
};
