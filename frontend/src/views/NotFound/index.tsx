import React from 'react';
import {Link} from 'react-router-dom';
import {HugoButton, HugoContainer} from '../../components';
import {Routes} from '../../routes';

export const NotFound: React.FC = () => {
  return (
    <HugoContainer sx={{textAlign: 'center'}}>
      {'Page Not Found'}
      <HugoButton ml="xl" component={Link} to={Routes.Home}>
        Return Home
      </HugoButton>
    </HugoContainer>
  );
};
