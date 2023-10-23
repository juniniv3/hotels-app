import { Body, Controller, Get, Post } from '@nestjs/common';
import { HotelsService } from './hotels.service';
import { CreateHotelDto } from './dto/create-hotel.dto';
import { Hotel } from './hotel.entity';

@Controller('hotels')
export class HotelsController {
  constructor(private hotelsService: HotelsService) {}

  @Get()
  getHotels(): Promise<Hotel[]> {
    return this.hotelsService.getHotels();
  }

  @Post()
  createHotel(@Body() newHotel: CreateHotelDto): Promise<Hotel> {
    return this.hotelsService.createHotel(newHotel);
  }
}
