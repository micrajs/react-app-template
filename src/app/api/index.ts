import axios from 'axios';
import { Config } from '@micra/core';
import { ServiceProvider } from '@micra/service-provider';
import { ApiConfig } from 'app/api/types';

export class ApiServiceProvider extends ServiceProvider {
  register() {
    const config = this.container.use<Config>('config').get('api') as ApiConfig;

    this.container.value('api/rest-client', axios.create(config.clients.rest));
  }
}
