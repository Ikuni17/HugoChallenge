import React from 'react';
import {Input, InputWrapperProps} from '@mantine/core';
import {Calendar, CalendarProps} from '@mantine/dates';

export interface HugoCalendarProps extends CalendarProps {
  wrapperProps: Omit<InputWrapperProps, 'children'>;
}

const defaultProps: Partial<CalendarProps> = {
  // Default style is red text for weekends
  dayStyle: (date, {weekend}) => (weekend ? {color: 'initial'} : {})
};

export const HugoCalendar: React.FC<HugoCalendarProps> = ({
  wrapperProps,
  ...rest
}) => {
  return (
    <Input.Wrapper {...wrapperProps}>
      <Calendar {...defaultProps} {...rest} />
    </Input.Wrapper>
  );
};
