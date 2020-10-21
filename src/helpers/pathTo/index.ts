import { i18n as I18n } from 'i18next';
import { ReactRouteRegistry } from '@micra/react-route-registry';
import { TranslationConfig } from 'app/translation/types';

export const pathTo = (name: string, params: Record<string, any> = {}) => {
  const i18n = use<I18n>('translation');
  const router = use<ReactRouteRegistry>('router');
  const translationConfig = config<TranslationConfig>('translation');

  const route = router.find(name);
  if (route) {
    const lng = i18n.language && i18n.language !== translationConfig?.defaultLanguage ? i18n.language : translationConfig?.defaultLanguage;

    return route.toPath({ lng, ...params });
  }

  return name;
}
