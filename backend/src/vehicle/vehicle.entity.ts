import {Entity, Column, PrimaryGeneratedColumn, ManyToOne} from 'typeorm';
import {Person} from 'src/person/person.entity';

@Entity()
export class Vehicle {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  street: string;

  @Column()
  city: string;

  @Column()
  state: string;

  @Column()
  zipcode: number;

  @ManyToOne(() => Person, person => person.vehicles)
  person: Person;
}
