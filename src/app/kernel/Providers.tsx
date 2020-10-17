import React, { memo, StrictMode } from 'react';
import { Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Provider as ReduxProvider } from 'react-redux';

export interface ProvidersProps {
  children: React.ReactNode;
}

const Providers = ({ children }: ProvidersProps) => (
  <StrictMode>
    <ReduxProvider store={use('store/manager').store}>
      <ThemeProvider theme={{}}>
        <Router history={use('router/history')}>{children}</Router>
      </ThemeProvider>
    </ReduxProvider>
  </StrictMode>
);

export default memo(Providers);
