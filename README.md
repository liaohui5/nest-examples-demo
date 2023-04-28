## 学习 nestjs demo

- [x] 集成 @nestjs/config
- [x] 集成 @nestjs/sequelize
- [x] 集成 sequelize-cli (数据库迁移和填充)
- [x] sequelize 关联模型(查询)
- [x] sequelize + DTO 验证数据: 
    - 用DTO做数据验证(pipe) 
    - 抛出自定义数据验证异常(exception) 
    - 全局异常处理(filter)
    - 自定义验证规则(rule)
- [x] intercepter + pipe + 全局异常处理, 返回统一格式数据格式
- [x] @nestj/sequelize + DTO: 增删改查
- [x] @nestjs/typeorm + DTO: 增删改查
- [x] AuthGuard: jwt 登录验证 + bcrypt 密码 hash
- [ ] multer: 文件上传/下载(pipe)
- [ ] serialization: 序列化响应 + comporession: 压缩响应体
- [ ] schedule: 定时任务
- [ ] queue: 任务队列
- [ ] cacheManager: 缓存
- [ ] EventEmit: 事件/发布订阅
- [ ] http 客户端
- [ ] cookie/session: 会话处理
- [ ] MVC模式: 服务端渲染而不是只提供API
- [ ] looger: 日志
- [ ] cacheManager: 缓存


## 目录说明

- database-migrations: 数据库迁移和填充, 使用 sequelize-cli, 因为 typeorm 的迁移不好用, 填充需要额外安装其他包
- src/validate: 验证相关
  - 自定义谁验证异常(exception)
  - 验证数据(pipe)
  - 自定义数据验证规则(rules)

- src/config: 所有配置文件 
  - `database.ts`: sequelize 的配置
  - `typeormdb.ts`: typeorm 的配置

- src/user: 集成 sequelize, 实现 restful 风格的接口
- src/ormexample: 集成 typeorm, 实现 restful 风格的接口

- src/global-exception-handler.pipe.ts: 全局异常处理(发生异常要在这里格式化)
- src/response-formatter.intercepter.ts: 全局响应格式化(未发生异常的时的响应)


## 相关文档

- [nestjs](https://docs.nestjs.cn/9/introduction)
- [sequelize](https://www.sequelize.cn/)
- [typeorm](https://typeorm.devjs.cn/)

