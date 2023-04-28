import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ValidatePipe } from './validate/validate.pipe';
import { ResponseFormatterInterceptor } from './response-formatter.interceptor';
import { UserModule } from './user/user.module';
import { OrmexampleModule } from './ormexample/ormexample.module';

import config from './config';
import { APP_INTERCEPTOR, APP_PIPE, } from '@nestjs/core';
import { AuthModule } from './auth/auth.module';
import { UploadModule } from './upload/upload.module';

@Module({
  providers: [
    {
      // 全局数据验证管道
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
    UserModule,

    // 集成 typeorm 示例
    OrmexampleModule,

    AuthModule,

    UploadModule,
  ],
})
export class AppModule { }
