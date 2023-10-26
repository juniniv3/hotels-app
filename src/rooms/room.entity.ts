import { Hotel } from '../hotels/hotel.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
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
  createAt: Date;

  @ManyToOne(() => Hotel, (hotel) => hotel.rooms)
  hotel: Hotel;
}
