import React from 'react';
import {MantineProvider} from '@mantine/core';
import {defaultTheme} from './styles/theme';
import {HugoButton, HugoTextInput} from './components';

export const App: React.FC = () => {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS theme={defaultTheme}>
      <HugoButton>Hello</HugoButton>
      <HugoTextInput label="World" />
    </MantineProvider>
  );
};
