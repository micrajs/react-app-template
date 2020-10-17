import { AxiosRequestConfig as RESTOptions } from 'axios';

export interface ApiConfig {
  clients: {
    rest: RESTOptions;
  };
}
