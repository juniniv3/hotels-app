import { Controller, Get } from '@nestjs/common';
import { ServicesService } from './services.service';
import { Service } from './services.entity';

@Controller('services')
export class ServicesController {
  constructor(private servicesService: ServicesService) {}

  @Get()
  getServices(): Promise<Service[]> {
    return this.servicesService.getServices();
  }
}
