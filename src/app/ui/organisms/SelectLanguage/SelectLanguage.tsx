import React, { memo } from 'react';
import { SelectLanguageProps } from 'app/ui/organisms/SelectLanguage/types';
import { useTranslation } from 'react-i18next';

const SelectLanguage = ({ onChange, defaultLanguage, language, languages  }: SelectLanguageProps) => {
  const { t } = useTranslation();

  return (
    <select onChange={onChange} value={language ?? defaultLanguage}>
      {languages.map(language => (
        <option key={language} value={language}>{t(`common:${language}`)}</option>
      ))}
    </select>
  );
};

export default memo(SelectLanguage);
