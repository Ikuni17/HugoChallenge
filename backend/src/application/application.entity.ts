import {Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn} from 'typeorm';
import {Person} from 'src/person/person.entity';

@Entity()
export class Application {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Person, person => person.application, {cascade: true})
  @JoinColumn()
  person: Person;
}
