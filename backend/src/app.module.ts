import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {AddressModule} from './address/address.module';
import {ApplicationModule} from './application/application.module';
import {PersonModule} from './person/person.module';
import {VehicleModule} from './vehicle/vehicle.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'hugoDB.sqlite3',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
      autoLoadEntities: true
    }),
    ApplicationModule,
    AddressModule,
    PersonModule,
    VehicleModule
  ],
  controllers: [],
  providers: []
})
export class AppModule {}
