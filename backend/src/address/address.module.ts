import {Module} from '@nestjs/common';
import {AddressService} from './address.service';

@Module({
  controllers: [],
  providers: [AddressService]
})
export class AddressModule {}
