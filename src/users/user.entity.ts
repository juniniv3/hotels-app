import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column()
  name: string;

  @Column()
  last_name: string;

  @Column()
  gender: string;

  @Column()
  birth_date: Date;

  @Column()
  document_type: string;

  @Column()
  phone: number;

  @Column()
  direction: string;

  @Column()
  role: number;

  @CreateDateColumn()
  create_at: Date;
}
