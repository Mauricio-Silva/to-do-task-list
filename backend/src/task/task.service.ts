import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './entities/task.entity';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task)
    private taskRepository: Repository<Task>,
  ) {}

  create(createTaskDto: CreateTaskDto): Promise<Task> {
    return this.taskRepository.save(createTaskDto);
  }

  async findAll(): Promise<Task[]> {
    return await this.taskRepository.find();
  }

  async findOne(id: string): Promise<Task> {
    return await this.taskRepository.findOneBy({ id });
  }

  async update(taskId: string, updateTaskDto: UpdateTaskDto): Promise<Task> {
    this.taskRepository.update(
      {
        id: taskId,
      },
      {
        description: updateTaskDto.description,
        status: updateTaskDto.status,
      },
    );
    return this.findOne(taskId);
  }

  remove(id: string): void {
    this.taskRepository.delete({ id });
  }
}
