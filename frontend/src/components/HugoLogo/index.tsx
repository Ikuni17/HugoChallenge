import React from 'react';
import {Link} from 'react-router-dom';
import {Routes} from '../../routes';
import logo from './logo.svg';

export const HugoLogo: React.FC<React.HTMLProps<HTMLImageElement>> = props => {
  return (
    <Link to={Routes.Home}>
      <img width={100} alt="logo" {...props} src={logo} />
    </Link>
  );
};
