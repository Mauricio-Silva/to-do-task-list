import { Status } from './../enum/task.enum';
import { User } from 'src/user/entities/user.entity';
export declare class Task {
    id: string;
    description: string;
    status: Status;
    users: User[];
}
