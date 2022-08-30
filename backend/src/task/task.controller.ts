import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './entities/task.entity';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get()
  showMessage(): string {
    return 'Here comes a Task';
  }

  @Get('/list')
  findAllTasks(): Promise<Task[]> {
    return this.taskService.findAll();
  }

  @Get('/:id')
  findOneTask(@Param('id') id: string): Promise<Task> {
    return this.taskService.findOneById(id);
  }

  @Post()
  createTask(@Body() createTaskDto: CreateTaskDto): Promise<Task> {
    return this.taskService.create(createTaskDto);
  }

  @Patch('/:id')
  updateTask(
    @Param('id') id: string,
    @Body() updateTaskDto: UpdateTaskDto,
  ): Promise<Task> {
    return this.taskService.update(id, updateTaskDto);
  }

  @Delete('/:id')
  removeTask(@Param('id') id: string): string {
    this.taskService.remove(id);
    return 'The Task was Removed';
  }
}
