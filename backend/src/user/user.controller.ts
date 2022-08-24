import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  showMessage(): string {
    return 'Here comes the User';
  }

  @Get('/list')
  findAllUsers(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Get('/:id')
  findOneUser(@Param('id') id: string): Promise<User> {
    return this.userService.findOneById(id);
  }

  @Post()
  createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.userService.create(createUserDto);
  }

  @Patch('/:id')
  updateUser(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<User> {
    return this.userService.update(id, updateUserDto);
  }

  @Delete('/:id')
  removeUser(@Param('id') id: string): string {
    this.userService.remove(id);
    return 'The User was Removed';
  }
}
