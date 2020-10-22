import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Language, TranslationConfig } from 'app/translation/types';
import { changeLanguage } from 'app/translation/helpers/changeLanguage';
import { SelectLanguageProps } from 'app/ui/organisms/SelectLanguage/types';

export const useSelectLanguage = (): SelectLanguageProps => {
  const { i18n } = useTranslation();
  const translationConfig = config('translation') as TranslationConfig;
  const onChange = useCallback((e: React.FormEvent<HTMLSelectElement>) => {
    changeLanguage(e.currentTarget.value as Language);
  }, []);

  return {
    language: i18n.language as Language,
    languages: translationConfig.languages,
    defaultLanguage: translationConfig.defaultLanguage,
    onChange,
  };
};
