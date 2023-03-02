import React from 'react';
import {HugoContainer} from '../../components';
import {ResumeTable} from './ResumeTable';
import {ThirdPartyForm} from './ThirdPartyForm';

export const Home: React.FC = () => {
  return (
    <HugoContainer>
      <ThirdPartyForm />
      <ResumeTable />
    </HugoContainer>
  );
};
