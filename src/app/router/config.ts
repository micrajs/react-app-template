import app from '@micra/application';
import { RouterConfig } from 'app/router/types';
import { TranslationConfig } from 'app/translation/types';
import { setActiveRoute } from './middlewares/setActiveRoute';

const translationConfig = config<TranslationConfig>('translation');
const languages = translationConfig?.languages.filter(lang => lang !== translationConfig.defaultLanguage).join('|');

app.config.set<RouterConfig>('router', {
  prefix: `/:lng(${languages})?`,
  middlewares: [
    setActiveRoute,
  ],
});
