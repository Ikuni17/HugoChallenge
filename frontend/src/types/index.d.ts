type ApplicationIdParam = number | string;

interface Application {
  id: number;
  person: Person;
  resume?: string;
}

interface Person {
  id: number;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  address?: Address;
  vehicles?: Vehicle[];
}

interface Address {
  id: number;
  street: string;
  city: string;
  state: string;
  zipcode: string;
}

interface Vehicle {
  id: number;
  make: string;
  model: string;
  vin: string;
  year: number;
}

interface PersonFormFields extends Omit<Required<Person>, 'dateOfBirth'> {
  dateOfBirth: Date;
}

interface ApplicationFormFields extends Omit<Application, 'id'> {
  id?: number;
  person: PersonFormFields;
}

interface SubFormProps {
  control: Control<PersonFormFields>;
}
