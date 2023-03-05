import {Entity, Column, PrimaryGeneratedColumn, ManyToOne} from 'typeorm';
import {Person} from 'src/person/person.entity';

@Entity()
export class Vehicle {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  make: string;

  @Column()
  model: string;

  @Column()
  year: number;

  @Column()
  vin: string;

  @ManyToOne(() => Person, person => person.vehicles)
  person: Person;
}
