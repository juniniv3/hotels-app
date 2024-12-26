import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { HotelsService } from './hotels.service';
import { CreateHotelDto } from './dto/create-hotel.dto';
import { Hotel } from './hotel.entity';
import { DeleteResult } from 'typeorm';

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

  @Delete()
  deleteHotel(@Body() hotelId: number): Promise<DeleteResult> {
    return this.hotelsService.deleteHotel(hotelId);
  }
}
