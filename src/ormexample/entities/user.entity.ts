import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('typeorm_users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  username: string;

  @Column()
  avatar: string;

  @Column()
  password: string;

  @Column()
  created_at: string;
}
