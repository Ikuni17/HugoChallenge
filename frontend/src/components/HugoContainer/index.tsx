import React from 'react';
import {Container, ContainerProps} from '@mantine/core';

const defaultProps: Partial<ContainerProps> = {
  pt: 'xl'
};

export const HugoContainer: React.FC<ContainerProps> = props => {
  return <Container {...defaultProps} {...props} />;
};
