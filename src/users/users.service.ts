import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private repository: Repository<UserEntity>,
  ) {}

  create(userDto: CreateUserDto) {
    return this.repository.save(userDto);
  }

  findByEmail(email: string) {
    return this.repository.findOneBy({ email });
  }

  findById(id: number) {
    return this.repository.findOneBy({
      id,
    });
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
