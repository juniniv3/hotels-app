import { Location } from '../locations/location.entity';
import { Room } from '../rooms/room.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Hotel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  description: string;

  @Column()
  starts: number;

  @Column()
  state: number;

  @ManyToOne(() => Location, (location) => location.hotels)
  location: Location;

  @OneToMany(() => Room, (room) => room.hotel)
  rooms: Room[];
}
