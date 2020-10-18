import { AxiosRequestConfig as RESTOptions } from 'axios';
import { RequestInit as GraphQLOptions } from 'graphql-request/dist/types.dom';

export interface ApiConfig {
  clients: {
    rest: RESTOptions;
    graphql: GraphQLOptions;
  };
}
