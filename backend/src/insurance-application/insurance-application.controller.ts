import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete
} from '@nestjs/common';
import {InsuranceApplicationService} from './insurance-application.service';
import {CreateInsuranceApplicationDto} from './dto/create-insurance-application.dto';
import {UpdateInsuranceApplicationDto} from './dto/update-insurance-application.dto';

@Controller('insurance-application')
export class InsuranceApplicationController {
  constructor(
    private readonly insuranceApplicationService: InsuranceApplicationService
  ) {}

  @Post()
  create(@Body() createInsuranceApplicationDto: CreateInsuranceApplicationDto) {
    return this.insuranceApplicationService.create(
      createInsuranceApplicationDto
    );
  }

  @Get()
  findAll() {
    return this.insuranceApplicationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.insuranceApplicationService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateInsuranceApplicationDto: UpdateInsuranceApplicationDto
  ) {
    return this.insuranceApplicationService.update(
      +id,
      updateInsuranceApplicationDto
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.insuranceApplicationService.remove(+id);
  }
}
