import { Config } from '@micra/core';
import { createBrowserHistory } from 'history';
import { ServiceProvider } from '@micra/service-provider';
import { router, ReactRouteRegistry } from '@micra/react-route-registry';
import { RouterConfig } from 'app/router/types';

export class RouterServiceProvider extends ServiceProvider {
  register() {
    this.container.value('router', router);
    this.container.value('router/history', createBrowserHistory());
  }

  boot() {
    const router = this.container.use<ReactRouteRegistry>('router');
    const config = this.container.use<Config>('config').get('router') as RouterConfig;

    router.prefix(config.prefix ?? '');
    router.middlewares(...config.middlewares);

    // eslint-disable-next-line global-require
    require('pages');
  }
}
