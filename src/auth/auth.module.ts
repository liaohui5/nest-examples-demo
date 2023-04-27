import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModel } from '../user/user.model';
import { JwtModule } from "@nestjs/jwt";
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    SequelizeModule.forFeature([UserModel]),
    // 第一步: 导入 nestjs/jwt 模块
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      global: true,
      useFactory: (config: ConfigService) => config.get('jwt')
    })
  ],
  controllers: [AuthController],


  // 第四步: 导入验证策略
  providers: [AuthService, JwtStrategy]
})
export class AuthModule { }
