import { PartialType } from '@nestjs/mapped-types';
import { IsEmail, IsOptional, IsString } from 'class-validator';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @IsOptional()
  @IsString({
    message: 'Inform a valid username',
  })
  name: string;

  @IsOptional()
  @IsEmail(
    {},
    {
      message: 'Inform a valid email address',
    },
  )
  email: string;

  @IsOptional()
  status: boolean;
}
