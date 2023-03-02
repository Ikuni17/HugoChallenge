import React from 'react';
import {MantineProvider} from '@mantine/core';
import {defaultTheme} from './styles/theme';
import {HugoButton, HugoContainer, HugoTextInput} from './components';

export const App: React.FC = () => {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS theme={defaultTheme}>
      <HugoContainer>
        <HugoButton>Hello</HugoButton>
        <HugoTextInput label="World" />
      </HugoContainer>
    </MantineProvider>
  );
};
