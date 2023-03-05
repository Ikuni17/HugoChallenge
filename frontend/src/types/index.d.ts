// TODO optional / null

type ApplicationIdParam = number | string;

interface Application {
  id: number;
  person: Person;
}

interface Person {
  id: number;
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
  address?: Address;
  vehicles?: Vehicle[];
}

interface Address {
  id: number;
  street: string;
  city: string;
  state: string;
  zipcode: number;
}

interface Vehicle {
  id: number;
  make: string;
  model: string;
  vin: string;
  year: number;
}

type ThirdPartyFormFields = Pick<
  Person,
  'firstName' | 'lastName' | 'dateOfBirth'
>;

interface PersonFormFields extends Omit<Person, 'id'> {
  address?: Omit<Address, 'id'>;
  vehicles?: Omit<Vehicle, 'id'>[];
}

interface ApplicationFormFields extends Omit<Application, 'id'> {
  person: PersonFormFields;
}
