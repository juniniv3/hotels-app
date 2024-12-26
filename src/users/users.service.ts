import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  create(user: Record<string, string>) {
    return this.userRepository.save(user);
  }

  findOne(email: string) {
    return this.userRepository.findOne({
      where: {
        email,
      },
    });
  }
}
