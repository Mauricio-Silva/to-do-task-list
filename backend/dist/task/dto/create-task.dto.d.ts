import { User } from 'src/user/entities/user.entity';
import { Status } from './../enum/task.enum';
export declare class CreateTaskDto {
    id: string;
    description: string;
    status: Status;
    users: User[];
}
