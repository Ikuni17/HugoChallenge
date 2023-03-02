import React from 'react';
import {createPolymorphicComponent, Button, ButtonProps} from '@mantine/core';

export interface HugoButtonProps
  extends ButtonProps,
    Omit<
      React.HTMLProps<HTMLButtonElement>,
      'ref' | 'color' | 'size' | 'type'
    > {}

const defaultProps: Partial<HugoButtonProps> = {
  variant: 'outline'
};

const _HugoButton = React.forwardRef<HTMLButtonElement, HugoButtonProps>(
  (props, ref) => {
    return <Button ref={ref} {...defaultProps} {...props} />;
  }
);

export const HugoButton = createPolymorphicComponent<'button', HugoButtonProps>(
  _HugoButton
);
