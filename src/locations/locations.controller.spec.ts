import { Test, TestingModule } from '@nestjs/testing';
import { LocationsController } from './locations.controller';
import { LocationsService } from './locations.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Location } from './location.entity';
import { Hotel } from '../hotels/hotel.entity';
import { HotelsService } from '../hotels/hotels.service';

describe('LocationsController', () => {
  let controller: LocationsController;
  let service: LocationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LocationsController],
      imports: [Hotel],
      providers: [
        LocationsService,
        {
          provide: getRepositoryToken(Location),
          useValue: {},
        },
        HotelsService,
        {
          provide: getRepositoryToken(Hotel),
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<LocationsController>(LocationsController);
    service = module.get<LocationsService>(LocationsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return an array of locations', async () => {
    const mockLocations: any = [{ name: 'Location 1' }, { name: 'Location 2' }];
    jest.spyOn(service, 'getLocations').mockResolvedValue(mockLocations);

    const result = await controller.getLocations();

    expect(result).toBe(mockLocations);
  });
});
