import React, { memo, StrictMode } from 'react';
import { Router } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import { ThemeProvider } from 'styled-components';
import { Provider as ReduxProvider } from 'react-redux';

export interface ProvidersProps {
  children: React.ReactNode;
}

const Providers = ({ children }: ProvidersProps) => (
  <StrictMode>
    <ReduxProvider store={use('store/manager').store}>
      <ThemeProvider theme={{}}>
        <I18nextProvider i18n={use('translation')}>
          <Router history={use('router/history')}>{children}</Router>
        </I18nextProvider>
      </ThemeProvider>
    </ReduxProvider>
  </StrictMode>
);

export default memo(Providers);
