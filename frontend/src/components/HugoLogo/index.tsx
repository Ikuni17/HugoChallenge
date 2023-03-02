import React from 'react';
import logo from './logo.svg';

export const HugoLogo: React.FC<React.HTMLProps<HTMLImageElement>> = props => {
  return <img width={100} alt="logo" {...props} src={logo} />;
};
