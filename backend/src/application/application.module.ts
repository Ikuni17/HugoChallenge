import {Module} from '@nestjs/common';
import {ApplicationService} from './application.service';
import {ApplicationController} from './application.controller';
import {Application} from './application.entity';
import {TypeOrmModule} from '@nestjs/typeorm';
import {Person} from 'src/person/person.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Application, Person])],
  controllers: [ApplicationController],
  providers: [ApplicationService]
})
export class ApplicationModule {}
