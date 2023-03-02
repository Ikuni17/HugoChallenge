import {Injectable} from '@nestjs/common';
import {CreateApplicationDto} from './dto/create-application.dto';
import {UpdateApplicationDto} from './dto/update-application.dto';
import {Application} from './application.entity';
import {InjectRepository} from '@nestjs/typeorm';
import {FindOptionsRelations, Repository} from 'typeorm';

// Return nested objects with GET requests
const relations: FindOptionsRelations<Application> = {
  person: {address: true, vehicles: true}
};

// TODO proper HTTP status codes/error handling
@Injectable()
export class ApplicationService {
  constructor(
    @InjectRepository(Application)
    private applicationRepo: Repository<Application>
  ) {}

  async create(application: CreateApplicationDto) {
    return await this.applicationRepo.save(application);
  }

  async findAll() {
    return await this.applicationRepo.find({relations});
  }

  async findOne(id: number) {
    return await this.applicationRepo.findOne({where: {id}, relations});
  }

  async update(id: number, application: UpdateApplicationDto) {
    return await this.applicationRepo.update(id, application);
  }

  async remove(id: number) {
    return await this.applicationRepo.delete(id);
  }

  async validate(id: number, application: UpdateApplicationDto) {
    // TODO
    return await `This action validates ${id}`;
  }
}
