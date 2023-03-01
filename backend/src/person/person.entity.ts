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

  @OneToMany(() => Vehicle, vehicle => vehicle.person)
  vehicles: Vehicle[];

  @OneToOne(() => Address, address => address.person)
  @JoinColumn()
  address: Address;

  @OneToOne(() => Application, application => application.person)
  @JoinColumn()
  application: Application;
}
