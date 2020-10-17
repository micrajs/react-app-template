import app from '@micra/application';
import { ReactDomKernelConfig } from '@micra/react-dom-kernel';
import App from 'app/kernel/App';
import Providers from 'app/kernel/Providers';

app.config.set<ReactDomKernelConfig>('react-dom-kernel', {
  domId: 'root',

  component: App,

  providers: Providers,
});
