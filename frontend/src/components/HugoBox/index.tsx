import React from 'react';
import {Box, BoxProps, createPolymorphicComponent} from '@mantine/core';

export interface HugoBoxProps
  extends BoxProps,
    Omit<React.HTMLProps<HTMLDivElement>, 'ref'> {}

const _HugoBox = React.forwardRef<HTMLDivElement, HugoBoxProps>(
  (props, ref) => {
    return <Box ref={ref} {...props} />;
  }
);

export const HugoBox = createPolymorphicComponent<'div', HugoBoxProps>(
  _HugoBox
);
