import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  ParseIntPipe
} from '@nestjs/common';
import {ApplicationService} from './application.service';
import {CreateApplicationDto} from './dto/create-application.dto';
import {UpdateApplicationDto} from './dto/update-application.dto';

@Controller('application')
export class ApplicationController {
  constructor(private readonly applicationService: ApplicationService) {}

  @Post()
  create(@Body() createApplicationDto: CreateApplicationDto) {
    return this.applicationService.create(createApplicationDto);
  }

  @Get()
  findAll() {
    return this.applicationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.applicationService.findOne(+id);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateApplicationDto: UpdateApplicationDto
  ) {
    return this.applicationService.update(updateApplicationDto);
  }

  @Post('/validate')
  validate(@Body() updateApplicationDto: UpdateApplicationDto) {
    return this.applicationService.validate(updateApplicationDto);
  }
}
