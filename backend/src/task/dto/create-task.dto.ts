import { IsEnum, IsString, IsUUID } from 'class-validator';
import { CreateUserDto } from './../../user/dto/create-user.dto';
// import { User } from 'src/user/entities/user.entity';
import { Status } from './../enum/task.enum';
export class CreateTaskDto {
  @IsUUID()
  id: string;

  @IsString({ message: 'Inform a valid description' })
  description: string;

  @IsEnum(Status)
  status: Status;

  users: CreateUserDto[];
}
