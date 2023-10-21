import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { HotelsModule } from './hotels/hotels.module';
import { ReservationsModule } from './reservations/reservations.module';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoomsModule } from './rooms/rooms.module';
import { LocationsModule } from './locations/locations.module';

@Module({
  imports: [
    UsersModule,
    HotelsModule,
    ReservationsModule,
    AuthModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '127.0.0.1',
      port: 5432,
      username: 'development',
      password: 'development',
      database: 'hotels',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true, // Only for development. Set to false in production.
    }),
    RoomsModule,
    LocationsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
