import React from 'react';
import {Calendar, CalendarProps} from '@mantine/dates';

const defaultProps: Partial<CalendarProps> = {
  // Default style is red text for weekends
  dayStyle: (date, {weekend}) => (weekend ? {color: 'initial'} : {})
};

export const HugoCalendar: React.FC<CalendarProps> = props => {
  return <Calendar {...defaultProps} {...props} />;
};
