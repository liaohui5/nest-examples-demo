import { Dependencies, Module } from '@nestjs/common';
import { OrmexampleService } from './ormexample.service';
import { OrmexampleController } from './ormexample.controller';

import { TypeOrmModule, TypeOrmModuleOptions } from "@nestjs/typeorm";
import { ConfigModule, ConfigService } from '@nestjs/config';
import { DataSource } from 'typeorm';
import { User } from './entities/user.entity';

@Dependencies(DataSource)
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService): TypeOrmModuleOptions => {
        return configService.get('typeormdb');
      }
    }),

    TypeOrmModule.forFeature([User]),
  ],
  controllers: [OrmexampleController],
  providers: [OrmexampleService],
})
export class OrmexampleModule {
  public constructor(public dataSource: DataSource) { }
}
