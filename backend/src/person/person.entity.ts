import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  OneToOne,
  JoinColumn
} from 'typeorm';
import {Vehicle} from 'src/vehicle/vehicle.entity';
import {Address} from 'src/address/address.entity';
import {Application} from 'src/application/application.entity';

@Entity()
export class Person {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column('datetime')
  dateOfBirth;

  @OneToMany(() => Vehicle, vehicle => vehicle.person, {cascade: true})
  vehicles: Vehicle[];

  @OneToOne(() => Address, address => address.person, {cascade: true})
  @JoinColumn()
  address: Address;

  @OneToOne(() => Application, application => application.person)
  application: Application;
}
