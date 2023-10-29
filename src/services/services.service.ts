import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Service } from './services.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ServicesService {
  constructor(
    @InjectRepository(Service) private servicesRepository: Repository<Service>,
  ) {}

  getServices() {
    return this.servicesRepository.find();
  }
}
