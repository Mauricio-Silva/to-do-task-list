import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './entities/task.entity';
import { TaskService } from './task.service';
export declare class TaskController {
    private readonly taskService;
    constructor(taskService: TaskService);
    showMessage(): string;
    findAllTasks(): Promise<Task[]>;
    findOneTaskById(id: string): Promise<Task>;
    findOneTaskByDescription(description: string): Promise<Task>;
    createTask(createTaskDto: CreateTaskDto): Promise<CreateTaskDto>;
    updateTask(id: string, updateTaskDto: UpdateTaskDto): Promise<Task>;
    removeTask(id: string): Promise<string>;
}
