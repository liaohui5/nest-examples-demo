import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, BaseEntity } from "typeorm";
import { User } from "./user.entity";

@Entity('typeorm_projects')
export class Project extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  user_id: number;

  @Column()
  project_name: string;

  @Column({ select: false })
  created_at: string;

  @Column({ select: false })
  updated_at: string;

  // 多对一
  @ManyToOne(() => User, (user) => user.projects)
  @JoinColumn({ name: 'user_id', referencedColumnName: 'id' })
  // @JoinColumn({ name: '当前表id', 关联的表的外键字段: 'id' })
  user: User
}
