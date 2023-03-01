import {Module} from '@nestjs/common';
import {InsuranceApplicationService} from './insurance-application.service';
import {InsuranceApplicationController} from './insurance-application.controller';

@Module({
  controllers: [InsuranceApplicationController],
  providers: [InsuranceApplicationService]
})
export class InsuranceApplicationModule {}
