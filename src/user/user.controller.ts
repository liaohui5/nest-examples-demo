import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserService } from './user.service';
import { GetUserDto } from './dto/get-user.dto';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) { }

  @Get('/')
  async index() {
    // WARN: 由于在 sequelize 的 model 需要集成内置的 BaseModel
    // 就会导致, 无法在 user.model.ts 中直接使用装饰器, 此时就需要
    // 再重新定义个新的类来约束响应数据的格式
    // 并且不能直接使用 model 查询的结果, plainToClass 要求必须是
    // 普通的 Object
    // 而使用 UserModel 查询时, 如果不加 raw:true
    // 选项, 查询的结果它是 UserModel 的实例, 没法使用 plainToClass
    // 要么在查询时加上 raw: true, 要不然手动调用 toJSON 转化成 Object
    const users = await this.userService.list();
    return plainToClass(GetUserDto, users.map(item => item.toJSON()));
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
