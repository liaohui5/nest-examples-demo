import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { User2Service } from './user2.service';
import { CreateUser2Dto } from './dto/create-user2.dto';
import { UpdateUser2Dto } from './dto/update-user2.dto';

@Controller('user2')
export class User2Controller {
  constructor(private readonly user2Service: User2Service) {}

  @Get('/user2')
  index() {
    return `This action returns all user2`;
  }

  @Post('/user2')
  create(createUser2Dto: CreateUser2Dto) {
    return 'This action adds a new user2';
  }

  @Patch('/user2/:id')
  update(id: number) {
    return `This action returns a #${id} user2`;
  }

  @Delete('/user2/:id')
  remove(id: number) {
    return `This action removes a #${id} user2`;
  }

}
