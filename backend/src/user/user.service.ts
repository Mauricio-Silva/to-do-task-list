import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';
import * as crypto from 'crypto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const original_password = createUserDto.password;
    const salt = await bcrypt.genSalt();
    createUserDto.password = await bcrypt.hash(original_password, salt);
    createUserDto.token = crypto.randomBytes(32).toString('hex');
    await this.userRepository.save(createUserDto);
    createUserDto.password = '';
    return createUserDto;
  }

  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async findOneById(id: string): Promise<User> {
    return await this.userRepository.findOneBy({ id });
  }

  async findOneByEmail(userEmail: string): Promise<User> {
    return await this.userRepository.findOne({
      where: {
        email: userEmail,
      },
    });
  }

  async update(userId: string, updateUserDto: UpdateUserDto): Promise<User> {
    const original_password = updateUserDto.password;
    const salt = await bcrypt.genSalt();
    updateUserDto.password = await bcrypt.hash(original_password, salt);
    await this.userRepository.update(
      {
        id: userId,
      },
      {
        name: updateUserDto.name,
        email: updateUserDto.email,
        password: updateUserDto.password,
        token: updateUserDto.token,
        createAt: updateUserDto.createAt,
        updateAt: updateUserDto.updateAt,
      },
    );
    return await this.findOneById(userId);
  }

  remove(id: string): void {
    this.userRepository.delete({ id });
  }
}
