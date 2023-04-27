import { applyDecorators, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";

// 第六步: 使用内置的聚合装饰器组合多个装饰器简化操作
export function Auth() {
  return applyDecorators(UseGuards(AuthGuard('jwt')))
}

