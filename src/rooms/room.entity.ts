import { Hotel } from '../hotels/hotel.entity';
import { Reservation } from '../reservations/reservation.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Room {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  area: number;

  @Column()
  capacity: number;

  @Column()
  state: number;

  @Column()
  description: string;

  @CreateDateColumn()
  create_at: Date;

  @ManyToOne(() => Hotel, (hotel) => hotel.rooms)
  hotel: Hotel;

  @OneToMany(() => Reservation, (reservation) => reservation.room)
  reservations: Reservation[];
}
