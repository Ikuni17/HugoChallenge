// TODO optional / null

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
  year: number;
}
