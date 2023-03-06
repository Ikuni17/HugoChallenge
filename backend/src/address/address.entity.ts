import {Entity, Column, PrimaryGeneratedColumn, OneToOne} from 'typeorm';
import {Person} from 'src/person/person.entity';

@Entity()
export class Address {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  street: string;

  @Column()
  city: string;

  @Column()
  state: string;

  // Zipcode is string to prevent leading 0 from being swallowed
  @Column()
  zipcode: string;

  @OneToOne(() => Person, person => person.address)
  person: Person;
}
