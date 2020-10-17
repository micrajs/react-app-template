import { ReducersMapObject } from 'redux';

export interface StoreConfig<S = Record<string, any>> {
  middlewares: any[];
  reducers: ReducersMapObject;
  initialState: S;
}

export type ID = number;
