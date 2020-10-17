import { Config } from '@micra/core';
import { ServiceProvider } from '@micra/service-provider';
import { ReduxStoreManager } from 'app/store/ReduxStoreManager';
import { StoreManager } from 'app/store/ReduxStoreManager/types';
import { StoreConfig } from 'app/store/types';

export class StoreServiceProvider extends ServiceProvider {
  register() {
    this.container.singleton('store/manager', ReduxStoreManager);
    this.container.factory('store', (container) => container.use('store/manager').store);
  }

  boot() {
    const storeManager = this.container.use<StoreManager>('store/manager');
    const config = this.container.use<Config>('config').get('store') as StoreConfig;

    storeManager.init(config);
  }
}
