import { Task } from './../../task/entities/task.entity';
export declare class CreateUserDto {
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
    task: Task;
}
