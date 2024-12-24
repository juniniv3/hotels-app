import { Hotel } from '../hotels/hotel.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Location {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  city: string;

  @Column()
  state: string;

  @Column()
  country: string;

  @Column()
  postal_codes: string;

  @CreateDateColumn()
  create_at: Date;

  @OneToMany(() => Hotel, (hotel) => hotel.location)
  hotels: Hotel[];
}
