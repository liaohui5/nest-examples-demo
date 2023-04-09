import { HttpException, HttpStatus } from "@nestjs/common";

// 验证失败异常 
export class ValidateException extends HttpException {
  constructor(response: any) {
    super(response, HttpStatus.UNPROCESSABLE_ENTITY) // 422
  }
}

