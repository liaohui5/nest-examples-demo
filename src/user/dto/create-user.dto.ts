import { IsEmail, IsNotEmpty, MinLength } from "class-validator";
import { IsNotExists } from "../../validate/rules/is-not-exists.rule";

export class CreateUserDto {
  @IsNotEmpty({ message: '用户名不能为空' })
  readonly username: string;

  @IsNotExists('users', { message: '邮箱已经存在' })
  @IsEmail({}, { message: '邮箱格式有误' })
  readonly email: string;

  @MinLength(6, { message: '密码不能少于6个字符' })
  readonly password: string;
}

