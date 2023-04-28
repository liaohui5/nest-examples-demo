import { Column, Entity, PrimaryGeneratedColumn, OneToMany, BaseEntity } from "typeorm";
import { Project } from "./project.entity";
import { Exclude, Transform } from "class-transformer"
import * as dayjs from "dayjs"

@Entity('typeorm_users')
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  username: string;

  @Column()
  avatar: string;

  // https://typeorm.devjs.cn/select-query-builder#%E9%9A%90%E8%97%8F%E5%88%97
  // 在 typeorm 中, 可直接使用装饰器, 将不需要的字段排除
  @Exclude()
  @Column({ select: false })
  password: string;

  // 在 typeorm 中, 可直接使用装饰器, 转换数据格式
  @Transform(({ value }) => dayjs(value).format('YYYY-MM-DD'))
  @Column()
  created_at: string;

  // 一对多
  @OneToMany(() => Project, (project) => project.user)
  projects: Project[]
}

