import React from 'react';
import {MantineProvider} from '@mantine/core';
import {defaultTheme} from './styles/theme';
import {Router} from './routes';
import {HugoLogo} from './components';

export const App: React.FC = () => {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS theme={defaultTheme}>
      {/* Ideally would be in a Header component */}
      <HugoLogo style={{margin: '8px'}} />
      <Router />
    </MantineProvider>
  );
};
