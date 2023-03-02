import {object, string, date} from 'yup';

const firstNameSchema = string().required('First name is required');
const lastNameSchema = string().required('Last name is required');
const dateOfBirthSchema = date().required('Date of birth is required');

export const thirdPartyFormSchema = object().shape({
  firstName: firstNameSchema,
  lastName: lastNameSchema,
  dateOfBirth: dateOfBirthSchema
});
