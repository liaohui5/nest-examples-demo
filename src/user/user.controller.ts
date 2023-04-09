import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) { }

  @Get('/')
  async index() {
    return await this.userService.list();
  }

  @Post('/')
  async create(@Body() userDto: CreateUserDto) {
    return await this.userService.create(userDto);
  }

  @Delete('/:id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    return await this.userService.delete(id);
  }

  @Patch('/:id')
  async update(@Param('id', ParseIntPipe) id: number, @Body() userDto: UpdateUserDto) {
    return await this.userService.update(id, userDto)
  }
}
