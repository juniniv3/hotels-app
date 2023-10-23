import { Module } from '@nestjs/common';
import { HotelsService } from './hotels.service';
import { HotelsController } from './hotels.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Hotel } from './hotel.entity';
import { Location } from 'src/locations/location.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Hotel]),
    TypeOrmModule.forFeature([Location]),
  ],
  providers: [HotelsService],
  controllers: [HotelsController],
})
export class HotelsModule {}
