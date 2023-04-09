import { Injectable } from '@nestjs/common';
import { CreateUser2Dto } from './dto/create-user2.dto';
import { UpdateUser2Dto } from './dto/update-user2.dto';

@Injectable()
export class User2Service {
  // constructor(private readonly) {
  //
  // }
  create(data: CreateUser2Dto) { }
  update(data: UpdateUser2Dto) { }
}
