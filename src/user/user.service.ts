import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ProjectModel } from './project.model';
import { UserModel } from './user.model';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(UserModel) private userModel: typeof UserModel,
    @InjectModel(ProjectModel) private projectModel: typeof ProjectModel
  ) {
  }

  // 创建
  async create(userDto: CreateUserDto) {
    return await this.userModel.create(userDto)
  }

  // 删除
  async delete(id: number) {
    return await this.userModel.destroy({
      where: { id },
    })
  }

  // 修改
  async update(id: number, userDto: UpdateUserDto) {
    return await this.userModel.update(userDto, {
      where: { id },
    })
  }

  // 查询
  async list() {
    return await this.userModel.findAll({
      include: [this.projectModel],
    })
  }

}

