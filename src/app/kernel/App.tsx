import React from 'react';
import Routes from 'app/router/Routes';
import { Language, TranslationConfig } from 'app/translation/types';
import { pathTo } from 'helpers/pathTo';
import { i18n as I18n } from 'i18next';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { changeLanguage } from 'app/translation/helpers/changeLanguage';

const App = () => {
  const { t } = useTranslation();
  const i18n = use<I18n>('translation');
  console.log(i18n);
  const translationConfig = config('translation') as TranslationConfig;
  const onChangeLanguage = (e: React.FormEvent<HTMLSelectElement>) => {
    changeLanguage(e.currentTarget.value as Language);
  }

  return (
    <>
      <header style={{ display: 'flex', width: '100%' }}>
        <menu style={{ width: '100%' }}>
          <Link to={pathTo('Home')}>{t('common:menu.Home')}</Link>
          <Link to={pathTo('About')}>{t('common:menu.About')}</Link>
        </menu>
        <menu>
        <select onChange={onChangeLanguage} value={i18n.language ?? translationConfig.defaultLanguage}>
          {translationConfig.languages.map(language => (
            <option key={language} value={language}>{language}</option>
          ))}
        </select>
        </menu>
      </header>
      <Routes />
    </>
  );
};

export default App;
