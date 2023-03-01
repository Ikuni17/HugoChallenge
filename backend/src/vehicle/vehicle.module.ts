import {Module} from '@nestjs/common';
import {VehicleService} from './vehicle.service';
import {TypeOrmModule} from '@nestjs/typeorm';
import {Vehicle} from './vehicle.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Vehicle])],
  controllers: [],
  providers: [VehicleService]
})
export class VehicleModule {}
