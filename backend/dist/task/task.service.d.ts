import { UpdateTaskDto } from './dto/update-task.dto';
import { CreateTaskDto } from './dto/create-task.dto';
import { Task } from './entities/task.entity';
import { Repository } from 'typeorm';
export declare class TaskService {
    private taskRepository;
    constructor(taskRepository: Repository<Task>);
    create(createTaskDto: CreateTaskDto): Promise<Task>;
    findAll(): Promise<Task[]>;
    findOneById(id: string): Promise<Task>;
    findOneByDescription(description: string): Promise<Task>;
    update(id: string, updateTaskDto: UpdateTaskDto): Promise<Task>;
    remove(id: string): Promise<void>;
}
