import {PartialType} from '@nestjs/mapped-types';
import {CreateInsuranceApplicationDto} from './create-insurance-application.dto';

export class UpdateInsuranceApplicationDto extends PartialType(
  CreateInsuranceApplicationDto
) {}
