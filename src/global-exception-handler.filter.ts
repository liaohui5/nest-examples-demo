import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from '@nestjs/common';

@Catch()
export class GlobalExceptionHandlerFilter<T extends Error> implements ExceptionFilter {
  catch(e: T, host: ArgumentsHost) {
    // 全局异常处理: 报错数据验证错误异常/数据库操作异常等
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const message = e.message || 'Internal server error';
    let status = 500;
    let data = null;

    // 如果是 HttpException
    if (e instanceof HttpException) {
      status = e.getStatus();
      data = e.getResponse();
    }

    // reponse body 格式
    const body: ResponseBodyContent = {
      success: false,
      status_code: status,
      message,
      data,
    }
    response.status(status).json(body);
  }
}
