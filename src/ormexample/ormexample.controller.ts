import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { OrmexampleService } from './ormexample.service';

@Controller('ormexample')
@Injectable()
export class OrmexampleController {
  constructor(private readonly ormexampleService: OrmexampleService) { }

  @Post()
  create(@Body() dto: CreateUserDto) {
    return this.ormexampleService.create(dto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.ormexampleService.remove(id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateUserDto) {
    return this.ormexampleService.update(id, dto);
  }

  @Get()
  async index() {
    return await this.ormexampleService.findAll();
  }
}
