import {Module} from '@nestjs/common';
import {PersonService} from './person.service';

@Module({
  controllers: [],
  providers: [PersonService]
})
export class PersonModule {}
