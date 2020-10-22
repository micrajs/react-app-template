import { ReactRouteRegistry } from '@micra/react-route-registry';
import { setActiveRoute } from 'app/router/middlewares/setActiveRoute';
import { fetchPageTranslations } from 'app/translation/middlewares/fetchPageTranslations';

use<ReactRouteRegistry>('router')
  .page('/about', async () => {
    return await import('pages/About/AboutPage');
  })
  .middlewares(
    setActiveRoute,
    fetchPageTranslations('About'),
  )
  .as('About');
