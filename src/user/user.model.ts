import { Table, Column, DataType, Model, HasMany } from "sequelize-typescript";
import { ProjectModel } from "./project.model";

@Table({ tableName: 'users', createdAt: 'created_at', updatedAt: false })
export class UserModel extends Model<UserModel> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  username: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  email: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    defaultValue: 1,
  })
  status: number;

  // -- 关联模型 -- //
  @HasMany(() => ProjectModel)
  projects: ProjectModel[]
}
