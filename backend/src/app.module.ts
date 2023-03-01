import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {TypeOrmModule} from '@nestjs/typeorm';
import {InsuranceApplicationModule} from './insurance-application/insurance-application.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'hugoDB',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true
    }),
    InsuranceApplicationModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
