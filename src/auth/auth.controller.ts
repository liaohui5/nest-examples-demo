import { Body, Controller, Get, Post, Request } from '@nestjs/common';
import { UserModel } from '../user/user.model';
import { AuthService } from './auth.service';
import { Auth } from './decorators/auth.decorator';
import { AuthUser } from './decorators/auth.user.decorator';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post('/login')
  async login(@Body() data: { email: string, password: string }) {
    // 第二步: 登录并且返回 token
    return await this.authService.login(data);
  }

  @Get('/all')
  @Auth() // 第五步: 使用策略验证, 用户是否登录
  async users(@AuthUser() user: UserModel ) {
    // return user; // 第六步: 获取已经登陆的用户信息
    return await this.authService.getUsers();
  }
}
