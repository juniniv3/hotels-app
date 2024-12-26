import { Injectable } from '@nestjs/common';
import { Hotel } from './hotel.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateHotelDto } from './dto/create-hotel.dto';
import { Location } from '../locations/location.entity';

@Injectable()
export class HotelsService {
  constructor(
    @InjectRepository(Hotel) private hotelsRepository: Repository<Hotel>,
    @InjectRepository(Location)
    private locationsRepository: Repository<Location>,
  ) {}

  async createHotel(hotelDto: CreateHotelDto) {
    const location = await this.locationsRepository.findOne({
      where: {
        id: hotelDto.location,
      },
    });
    const hotel = new Hotel();
    hotel.name = hotelDto.name;
    hotel.starts = hotelDto.starts;
    hotel.description = hotelDto.description;
    hotel.state = hotelDto.state;
    hotel.location = location;
    return this.hotelsRepository.save(hotel);
  }

  async deleteHotel(hotelId: number) {
    return this.hotelsRepository.delete(hotelId);
  }

  getHotels() {
    return this.hotelsRepository.find();
  }
}
