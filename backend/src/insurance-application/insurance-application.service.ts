import {Injectable} from '@nestjs/common';
import {CreateInsuranceApplicationDto} from './dto/create-insurance-application.dto';
import {UpdateInsuranceApplicationDto} from './dto/update-insurance-application.dto';

@Injectable()
export class InsuranceApplicationService {
  create(createInsuranceApplicationDto: CreateInsuranceApplicationDto) {
    return 'This action adds a new insuranceApplication';
  }

  findAll() {
    return `This action returns all insuranceApplication`;
  }

  findOne(id: number) {
    return `This action returns a #${id} insuranceApplication`;
  }

  update(
    id: number,
    updateInsuranceApplicationDto: UpdateInsuranceApplicationDto
  ) {
    return `This action updates a #${id} insuranceApplication`;
  }

  remove(id: number) {
    return `This action removes a #${id} insuranceApplication`;
  }
}
