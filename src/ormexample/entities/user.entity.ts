import { Column, Entity, PrimaryGeneratedColumn, OneToMany, BaseEntity } from "typeorm";
import { Project } from "./project.entity";

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
  @Column({ select: false })
  password: string;

  @Column()
  created_at: string;

  // 一对多
  @OneToMany(() => Project, (project) => project.user)
  projects: Project[]
}
