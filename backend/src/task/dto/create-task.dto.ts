import { CreateUserDto } from './../../user/dto/create-user.dto';
// import { User } from 'src/user/entities/user.entity';
import { Status } from './../enum/task.enum';
export class CreateTaskDto {
  id: string;

  description: string;

  status: Status;

  users: CreateUserDto[];
}
