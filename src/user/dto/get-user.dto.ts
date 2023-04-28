import { Exclude, Expose } from "class-transformer"
import { ProjectModel } from "../project.model";

@Expose()
export class GetUserDto {
  id: number;
  username: string;
  email: string;
  @Exclude()
  password: string;
  status: number;
  token?: string;
  projects?: ProjectModel[]

  constructor(partial: Partial<GetUserDto>) {
    Object.assign(this, partial)
  }
}
