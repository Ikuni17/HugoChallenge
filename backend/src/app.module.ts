import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {ApplicationModule} from './application/application.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'hugoDB.sqlite3',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
      autoLoadEntities: true
    }),
    ApplicationModule
  ],
  controllers: [],
  providers: []
})
export class AppModule {}
