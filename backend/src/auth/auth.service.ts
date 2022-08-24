import { UserService } from './../user/user.service';
import { Injectable } from '@nestjs/common';
import { CheckAuthDto } from './dto/check-auth.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  async check(checkAuthDto: CheckAuthDto): Promise<boolean> {
    const user = await this.userService.findOneByEmail(checkAuthDto.email);
    if (user === null) {
      return false;
    }
    return await bcrypt.compare(checkAuthDto.password, user.password);
  }
}
