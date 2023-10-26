import { Test, TestingModule } from '@nestjs/testing';
import { HotelsService } from './hotels.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Location } from '../locations/location.entity';
import { Hotel } from './hotel.entity';
import { LocationsService } from '../locations/locations.service';

describe('HotelsService', () => {
  let service: HotelsService;

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
    }).compile();

    service = module.get<HotelsService>(HotelsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
