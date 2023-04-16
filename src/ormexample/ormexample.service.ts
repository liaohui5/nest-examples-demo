import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class OrmexampleService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>
  ) { }

  // create
  async create(dto: CreateUserDto) {
    return await this.userRepository.save(dto);
  }

  // remove
  async remove(id: number) {
    return await this.userRepository.delete(id);
  }

  // update
  async update(id: number, dto: UpdateUserDto) {
    return await this.userRepository.update(id, dto)
  }

  // findAll
  async findAll(): Promise<User[]> {
    return await this.userRepository.find({
      take: 10,
      relations: {
        projects: true,
      }
    })
  }
}
