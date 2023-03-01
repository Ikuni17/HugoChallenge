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

  @Column()
  zipcode: number;

  @OneToOne(() => Person, person => person.address)
  person: Person;
}
