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
    // TODO return resume URL: http://localhost:3000/application/:id
    return await this.applicationRepo.save(application);
  }

  async findAll() {
    // TODO return null instead of empty [] for vehicles
    return await this.applicationRepo.find({relations});
  }

  async findOne(id: number) {
    // TODO return null instead of empty [] for vehicles
    return await this.applicationRepo.findOne({where: {id}, relations});
  }

  async update(application: UpdateApplicationDto) {
    // Using save instead of update automatically handles relation upsert
    return await this.applicationRepo.save(application);
  }

  async remove(id: number) {
    return await this.applicationRepo.delete(id);
  }

  async validate(application: UpdateApplicationDto) {
    // TODO validation func

    return {price: Number((Math.random() * (100 - 10) + 10).toFixed(2))};
  }
}
