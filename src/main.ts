import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { GlobalExceptionHandlerFilter } from './global-exception-handler.filter';

async function bootstrap() {
  // 实例化 app 实例
  const app = await NestFactory.create(AppModule);

  // 设置全局路由前缀
  app.setGlobalPrefix('/api');

  // 全局异常处理
  app.useGlobalFilters(new GlobalExceptionHandlerFilter())

  // 允许跨域
  app.enableCors();

  // 服务监听端口
  await app.listen(process.env.APP_PORT);
}

bootstrap();
