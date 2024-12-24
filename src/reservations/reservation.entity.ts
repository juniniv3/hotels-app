import { Room } from '../rooms/room.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Reservation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  guestName: string;

  @Column()
  checkInDate: Date;

  @Column()
  checkOutDate: Date;

  @CreateDateColumn()
  create_at: Date;

  @ManyToOne(() => Room, (room) => room.reservations)
  room: Room;
}
