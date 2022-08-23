import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  create(createUserDto: CreateUserDto): Promise<User> {
    return this.userRepository.save(createUserDto);
  }

  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async findOne(id: string): Promise<User> {
    return await this.userRepository.findOneBy({ id });
  }

  async update(userId: string, updateUserDto: UpdateUserDto): Promise<User> {
    this.userRepository.update(
      {
        id: userId,
      },
      {
        name: updateUserDto.name,
        email: updateUserDto.email,
        password: updateUserDto.password,
        confirm: updateUserDto.confirm,
        createAt: updateUserDto.createAt,
        updateAt: updateUserDto.updateAt,
      },
    );
    return this.findOne(userId);
  }

  remove(id: string): void {
    this.userRepository.delete({ id });
  }
}
