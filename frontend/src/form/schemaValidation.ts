import dayjs from 'dayjs';
import {object, string, date, number, array} from 'yup';

const isMinimumAge = (date: Date) => {
  return dayjs().diff(date, 'year') >= 16;
};

const firstName = string().required('First Name is required');
const lastName = string().required('Last Name is required');
const dateOfBirth = date()
  .required('Date of Birth is required')
  .test('is-min-age', 'You must be at least 16 years old', isMinimumAge);
const street = string().required('Street is required');
const city = string().required('City is required');
const state = string().required('State is required');
const zipcode = number().required('Zipcode is required');
const make = string().required('Make is required');
const model = string().required('Model is required');
const vin = string().required('VIN is required');
const year = number().required('Year is required');

export const personFormSchema = object({
  firstName,
  lastName,
  dateOfBirth
});

export const addressSchema = object({
  street,
  city,
  state,
  zipcode
});

export const vehicleSchema = object({
  make,
  model,
  vin,
  year
});

export const applicationFormSchema = object({
  firstName,
  lastName,
  dateOfBirth,
  address: addressSchema,
  vehicles: array(vehicleSchema).min(1).max(3)
});
