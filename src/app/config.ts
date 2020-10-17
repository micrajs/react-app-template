import app from '@micra/application';
import { ReactDomKernel } from '@micra/react-dom-kernel';
import { TSyringeServiceContainer } from '@micra/tsyringe-service-container';
import { AppConfig } from 'app/types';
import { ApiServiceProvider } from 'app/api';
import { StoreServiceProvider } from 'app/store';
import { RouterServiceProvider } from 'app/router';

app.config.set<AppConfig>('app', {
  /**
   * Application's name
   */
  name: 'Foody',

  /**
   * Application's URL
   */
  url: 'http://localhost:4200',

  /**
   * Service container class to be used.
   */
  container: TSyringeServiceContainer,

  /**
   * Application kernel
   */
  kernel: ReactDomKernel,

  /**
   * Service providers
   */
  services: [StoreServiceProvider, RouterServiceProvider, ApiServiceProvider],
});
