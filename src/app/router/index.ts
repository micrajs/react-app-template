// import { Config } from '@micra/core';
import { createBrowserHistory } from 'history';
import { router } from '@micra/react-route-registry';
import { ServiceProvider } from '@micra/service-provider';
// import { RouterConfig } from 'app/router/types';

export class RouterServiceProvider extends ServiceProvider {
  register() {
    this.container.value('router', router);
    this.container.value('router/history', createBrowserHistory());
  }

  boot() {
    // eslint-disable-next-line global-require
    require('pages');
  }
}
