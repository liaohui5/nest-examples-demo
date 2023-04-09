import { Dependencies, Module } from '@nestjs/common';
import { UserModule } from 'src/user/user.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SequelizeModule, SequelizeModuleOptions } from '@nestjs/sequelize';
import { ValidatePipe } from './validate/validate.pipe';
import { ResponseFormatterInterceptor } from './response-formatter.interceptor';
import config from './config';
import { APP_INTERCEPTOR, APP_PIPE, } from '@nestjs/core';
import { TypeOrmModule, TypeOrmModuleOptions } from "@nestjs/typeorm";
import { DataSource } from "typeorm";

@Dependencies(DataSource)
@Module({
  providers: [
    {
      provide: APP_PIPE,
      useClass: ValidatePipe
    },
    {
      // 统一数据格式(没有出现异常时, 正确响应时)
      provide: APP_INTERCEPTOR,
      useClass: ResponseFormatterInterceptor,
    }
  ],
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: config,
    }),
    // 集成 sequelize 示例
    SequelizeModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService): SequelizeModuleOptions => {
        return configService.get('database');
      },
    }),
    UserModule,
    // 集成 typeorm 示例
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService): TypeOrmModuleOptions => {
        return configService.get('typeormdb');
      }
    })
  ],
})
export class AppModule {
  constructor(public dataSource: DataSource) {
  }
}