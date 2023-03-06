import React from 'react';
import {DatePicker, DatePickerProps} from '@mantine/dates';

const defaultProps: Partial<DatePickerProps> = {
  allowFreeInput: true,
  firstDayOfWeek: 'sunday',
  // Default style is red text for weekends
  dayStyle: (date, {weekend}) => (weekend ? {color: 'initial'} : {})
};

export const HugoDatePicker: React.FC<DatePickerProps> = props => {
  return <DatePicker {...defaultProps} {...props} />;
};
