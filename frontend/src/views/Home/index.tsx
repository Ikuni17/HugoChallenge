import React from 'react';
import {
  HugoButton,
  HugoContainer,
  HugoLogo,
  HugoTextInput
} from '../../components';

export const Home: React.FC = () => {
  return (
    <HugoContainer>
      <HugoLogo />
      <HugoButton>Hello</HugoButton>
      <HugoTextInput label="World" />
    </HugoContainer>
  );
};
