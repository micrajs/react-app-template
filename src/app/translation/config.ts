import app from '@micra/application';
import { initReactI18next } from 'react-i18next';
import languageDetection from 'i18next-browser-languagedetector';
import { TranslationConfig, Language } from 'app/translation/types';

const DEFAULT_LANGUAGE: Language = 'en';
const LANGUAGES: Language[] = ['en', 'fr'];

app.config.set<TranslationConfig>('translation', {
  defaultLanguage: DEFAULT_LANGUAGE,
  languages: LANGUAGES,
  plugins: [initReactI18next, languageDetection],
  options: {
    fallbackLng: DEFAULT_LANGUAGE,
    whitelist: LANGUAGES,
    returnObjects: true,
    defaultNS: 'common',
    interpolation: {
      escapeValue: false,
    },
    react: {
      wait: true,
      bindI18n: 'languageChanged added loaded',
      nsMode: 'default',
    },
    detection: {
      order: ['path'],
    },
    resources: LANGUAGES.reduce<Record<string, {}>>((resources, language) => {
      resources[language] = {};
      return resources;
    }, {}),
  },
});
