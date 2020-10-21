import { ReactRouteRegistry } from '@micra/react-route-registry';
import { setActiveRoute } from 'app/router/middlewares/setActiveRoute';
import { fetchTranslations } from 'app/translation/middlewares/fetchPageTranslations';

use<ReactRouteRegistry>('router')
  .page('/about', async () => {
    return await import('pages/About/AboutPage');
  })
  .middlewares(
    setActiveRoute,
    fetchTranslations('About'),
  )
  .as('About');
