import { CreateTaskDto } from './../../task/dto/create-task.dto';

export class UserDto {
  id: string;

  name: string;

  email: string;

  status: boolean;

  password: string;

  confirmationPassword: string;

  confirmationToken: string;

  salt: string;

  createAt: Date;

  updateAt: Date;

  task: CreateTaskDto;
}
