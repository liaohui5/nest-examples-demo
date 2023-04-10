import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserModel } from './user.model';
import { SequelizeModule, SequelizeModuleOptions } from '@nestjs/sequelize';
import { ProjectModel } from './project.model';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    SequelizeModule.forFeature([
      UserModel,
      ProjectModel,
    ]),
    SequelizeModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService): SequelizeModuleOptions => {
        return configService.get('database');
      },
    }),
  ],
  providers: [UserService],
  controllers: [UserController],
})
export class UserModule { }
