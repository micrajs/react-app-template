import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Routes from 'app/router/Routes';
import { pathTo } from 'helpers/pathTo';
import SelectLanguage from 'app/ui/organisms/SelectLanguage';

const App = () => {
  const { t } = useTranslation();

  return (
    <>
      <header style={{ display: 'flex', width: '100%' }}>
        <menu style={{ width: '100%' }}>
          <Link to={pathTo('Home')}>{t('common:menu.Home')}</Link>
          <Link to={pathTo('About')}>{t('common:menu.About')}</Link>
        </menu>
        <menu>
        <SelectLanguage />
        </menu>
      </header>
      <Routes />
    </>
  );
};

export default App;
