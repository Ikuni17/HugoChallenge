import {Module} from '@nestjs/common';
import {VehicleService} from './vehicle.service';

@Module({
  controllers: [],
  providers: [VehicleService]
})
export class VehicleModule {}
