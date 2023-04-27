import { createParamDecorator, ExecutionContext } from "@nestjs/common";

// 用于获取request中的user用户信息，user来源于之前 jwt 策略中 validate 方法,返回的值
export const AuthUser = createParamDecorator((data: unknown, ctx: ExecutionContext) => {
  const request = ctx.switchToHttp().getRequest();
  return request.user;
})

