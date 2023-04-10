import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('typeorm_users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  user_id: number;

  @Column()
  project_name: string;

  @Column()
  created_at: string;

  @Column()
  udpated_at: string;
}
