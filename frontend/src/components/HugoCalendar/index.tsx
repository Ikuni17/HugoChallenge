import React from 'react';
import {Calendar, CalendarProps} from '@mantine/dates';

export const HugoCalendar: React.FC<CalendarProps> = props => {
  return <Calendar {...props} />;
};
