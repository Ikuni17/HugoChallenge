import React from 'react';
import {
  HugoButton,
  HugoStack,
  HugoTextInput,
  HugoTitle
} from '../../components';

export const ThirdPartyForm: React.FC = () => {
  return (
    <HugoStack>
      <HugoTitle order={3} align="center">
        {'Start New Application'}
      </HugoTitle>
      <HugoTextInput label={'First Name'} />
      <HugoTextInput label={'Last Name'} />
      <HugoTextInput label={'Date of Birth'} />
      <HugoButton type="submit">{'Submit'}</HugoButton>
    </HugoStack>
  );
};
