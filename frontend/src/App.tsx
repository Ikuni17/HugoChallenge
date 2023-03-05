import React from 'react';
import {MantineProvider} from '@mantine/core';
import {QueryClient, QueryClientProvider} from 'react-query';
import {defaultTheme} from './styles/theme';
import {Router} from './routes';
import {HugoLogo} from './components';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
});

export const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider withGlobalStyles withNormalizeCSS theme={defaultTheme}>
        {/* Ideally would be in a Header component */}
        <HugoLogo style={{margin: '8px'}} />
        <Router />
      </MantineProvider>
    </QueryClientProvider>
  );
};
