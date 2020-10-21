import { History } from 'history';
import { i18n as I18n } from 'i18next';
import { ReactRoute } from '@micra/react-route-registry';
import { Language, TranslationConfig } from 'app/translation/types';

export const changeLanguage = (language: Language) => {
  const i18n = use<I18n>('translation');
  const history = use<History>('router/history');
  const route = use<ReactRoute>('router/active-route');
  const translationConfig = config<TranslationConfig>('translation');

  const params = route.match(history.location.pathname);
  const lng =
    language !== translationConfig?.defaultLanguage &&
    translationConfig?.languages.includes(language)
      ? language
      : undefined;

  i18n.changeLanguage(language);
  history.push(route.toPath({ ...params, lng }));
};
