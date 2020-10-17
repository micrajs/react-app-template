import thunk from 'redux-thunk';
import app from '@micra/application';
import { StoreConfig } from 'app/store/types';

app.config.set<StoreConfig>('store', {
  initialState: {},

  middlewares: [thunk],

  reducers: {},
});
