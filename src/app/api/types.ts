import { AxiosRequestConfig as RESTOptions } from 'axios';
import { GraphQLClient as GraphQLRequest } from 'graphql-request';
import { RequestInit as GraphQLOptions } from 'graphql-request/dist/types.dom';

export type GraphQLClient = (endpoint: string) => GraphQLRequest;
export interface ApiConfig {
  clients: {
    rest: RESTOptions;
    graphql: GraphQLOptions;
  };
}
