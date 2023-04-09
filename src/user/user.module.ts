import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserModel } from './user.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { ProjectModel } from './project.model';

@Module({
  imports: [
    SequelizeModule.forFeature([
      UserModel,
      ProjectModel,
    ])
  ],
  providers: [UserService],
  controllers: [UserController],
})
export class UserModule { }
