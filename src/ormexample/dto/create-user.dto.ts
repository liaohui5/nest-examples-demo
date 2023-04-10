import { IsEmail, MinLength } from "class-validator";

export class CreateUserDto {
  @IsEmail({}, { message: '邮箱格式有误' })
  readonly email: string;

  @MinLength(6, { message: '密码不能少于6个字符' })
  readonly password: string;
}

