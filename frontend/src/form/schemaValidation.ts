import {object, string, date} from 'yup';

const firstNameSchema = string().required('First Name is required');
const lastNameSchema = string().required('Last Name is required');
const dateOfBirthSchema = date().required('Date of Birth is required');

export const thirdPartyFormSchema = object().shape({
  firstName: firstNameSchema,
  lastName: lastNameSchema,
  dateOfBirth: dateOfBirthSchema
});
