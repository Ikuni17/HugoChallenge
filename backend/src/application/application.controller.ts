import {Controller, Get, Post, Body, Param, Delete, Put} from '@nestjs/common';
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
  findOne(@Param('id') id: string) {
    return this.applicationService.findOne(+id);
  }

  // TODO: validate ID
  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateApplicationDto: UpdateApplicationDto
  ) {
    return this.applicationService.update(updateApplicationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.applicationService.remove(+id);
  }

  // TODO
  // @Post(':id')
  // validate(
  //   @Param('id') id: string,
  //   @Body() updateApplicationDto: UpdateApplicationDto
  // ) {
  //   return this.applicationService.validate(+id, updateApplicationDto);
  // }
}
