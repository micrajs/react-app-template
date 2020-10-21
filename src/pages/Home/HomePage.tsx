import React from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { connect } from 'helpers/connect';
import { homePageSetup } from 'pages/Home/homePageSetup';

const HomePage = () => {
  const { t } = useTranslation('Home');

  return (
    <>
      <Helmet>
        <title>{t('title')}</title>
      </Helmet>
      <h1>{t('title')}</h1>
    </>
  );
};

export default connect(homePageSetup, HomePage);
