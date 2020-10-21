import React from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { connect } from 'helpers/connect';
import { aboutPageSetup } from 'pages/About/aboutPageSetup';

const AboutPage = () => {
  const { t } = useTranslation('About');

  return (
    <>
      <Helmet>
        <title>{t('title')}</title>
      </Helmet>
      <h1>{t('title')}</h1>
    </>
  );
};

export default connect(aboutPageSetup, AboutPage);
