import { CreateTaskDto } from './../../task/dto/create-task.dto';
// import { Task } from './../../task/entities/task.entity';
export class CreateUserDto {
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
