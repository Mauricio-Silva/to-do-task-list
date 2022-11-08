import { CreateUserDto } from './../../user/dto/create-user.dto';
import { Status } from './../enum/task.enum';
export declare class CreateTaskDto {
    id: string;
    description: string;
    status: Status;
    users: CreateUserDto[];
}
