import { Injectable, UnauthorizedException } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy, ExtractJwt } from "passport-jwt"
import { AuthService } from "./auth.service";
// 第三步: 编写验证策略, 使用 passport-local 或 passport-jwt 都可以
// passport-local : https://www.npmjs.com/package/passport-local
// passport-jwt   : https://www.npmjs.com/package/passport-jwt

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(private readonly authService: AuthService, private readonly configService: ConfigService) {
    super({
      //解析用户提交的header中的Bearer Token数据
      // 从 request header 中获取 Authorization 字段, 值必须是以bearer开头,如: bearer jwt_token_str
      // jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),

      // 从 request header 中获取 token 字段用作验证, 不用 bearer 开头, 直接: jwt_token_str
      jwtFromRequest: ExtractJwt.fromHeader('token'),

      //加密码的 secret
      secretOrKey: configService.get('jwt.secret'),
    });
  }

  async validate({ sub: id }): Promise<any> {
    const user = this.authService.validateUser(id)
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }

}

