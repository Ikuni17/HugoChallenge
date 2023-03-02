import dayjs from 'dayjs';
import {object, string, date} from 'yup';

const isMinimumAge = (date: Date) => {
  return dayjs().diff(date, 'year') >= 16;
};

const firstNameSchema = string().required('First Name is required');
const lastNameSchema = string().required('Last Name is required');
const dateOfBirthSchema = date()
  .required('Date of Birth is required')
  .test('is-min-age', 'You must be at least 16 years old', isMinimumAge);

export const thirdPartyFormSchema = object().shape({
  firstName: firstNameSchema,
  lastName: lastNameSchema,
  dateOfBirth: dateOfBirthSchema
});
