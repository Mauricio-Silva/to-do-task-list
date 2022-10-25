import { IsAlpha, IsBoolean, IsEmail, IsString, IsUUID } from 'class-validator';
import { CreateTaskDto } from './../../task/dto/create-task.dto';

export class CreateUserDto {
  @IsUUID()
  id: string;

  @IsAlpha('', { message: 'Inform a valid name' })
  name: string;

  @IsEmail({}, { message: 'Inform a valid email address' })
  email: string;

  @IsBoolean({ message: 'Inform a valid status' })
  status: boolean;

  @IsString({ message: 'Inform a valid username' })
  password: string;

  confirmationPassword: string;

  confirmationToken: string;

  salt: string;

  createAt: Date;

  updateAt: Date;

  task: CreateTaskDto;
}
