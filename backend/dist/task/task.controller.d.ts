import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './entities/task.entity';
export declare class TaskController {
    private readonly taskService;
    constructor(taskService: TaskService);
    showMessage(): string;
    findAllTasks(): Promise<Task[]>;
    findOneTask(id: string): Promise<Task>;
    createTask(createTaskDto: CreateTaskDto): Promise<Task>;
    updateTask(id: string, updateTaskDto: UpdateTaskDto): Promise<Task>;
    removeTask(id: string): string;
}
