import { ReactRouteRegistry } from '@micra/react-route-registry';
import { setActiveRoute } from 'app/router/middlewares/setActiveRoute';
import { fetchPageTranslations } from 'app/translation/middlewares/fetchPageTranslations';

use<ReactRouteRegistry>('router')
  .page('/', async () => {
    return await import('pages/Home/HomePage');
  })
  .middlewares(
    setActiveRoute,
    fetchPageTranslations('Home'),
  )
  .as('Home');
