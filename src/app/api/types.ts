import { AxiosRequestConfig as RESTOptions } from 'axios';
import { GraphQLClient as GraphQLRequest } from 'graphql-request';
import { RequestInit as GraphQLOptions } from 'graphql-request/dist/types.dom';

export interface ApiConfig {
  clients: {
    rest: RESTOptions;
    graphql: GraphQLOptions;
  };
}

export type GraphQLClient = (endpoint: string) => GraphQLRequest;
