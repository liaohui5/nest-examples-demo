import { Table, Column, DataType, Model, BelongsTo, ForeignKey } from "sequelize-typescript";
import { UserModel } from "./user.model";

@Table({ tableName: 'projects', updatedAt: 'updated_at', createdAt: 'created_at' })
export class ProjectModel extends Model<ProjectModel> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ForeignKey(() => UserModel)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  user_id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  project_name: string;


  @BelongsTo(() => UserModel)
  user: UserModel
}
