import { i18n as I18n } from 'i18next';
import { TranslationConfig } from 'app/translation/types';

export const fetchPageTranslations = (namespace: string) => async () => {
  const i18n = use<I18n>('translation');
  const translationConfig = config<TranslationConfig>('translation');
  const locale = await import(`pages/${namespace}/translations`);

  translationConfig?.languages.forEach(language => {
    if (locale[language]) {
      i18n.addResourceBundle(language, namespace, locale[language]);
    }
  });
};
