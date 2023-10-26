import { Test, TestingModule } from '@nestjs/testing';
import { HotelsController } from './hotels.controller';
import { HotelsService } from './hotels.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Hotel } from './hotel.entity';
import { LocationsService } from '../locations/locations.service';
import { Location } from '../locations/location.entity';

describe('HotelsController', () => {
  let controller: HotelsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        HotelsService,
        {
          provide: getRepositoryToken(Hotel),
          useValue: {},
        },
        LocationsService,
        {
          provide: getRepositoryToken(Location),
          useValue: {},
        },
      ],
      controllers: [HotelsController],
    }).compile();

    controller = module.get<HotelsController>(HotelsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
