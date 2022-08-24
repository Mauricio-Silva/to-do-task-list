import { UserService } from './../user/user.service';
import { Injectable } from '@nestjs/common';
import { CheckAuthDto } from './dto/check-auth.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  private readonly userService: UserService;

  async check(checkAuthDto: CheckAuthDto): Promise<boolean> {
    const original_password = checkAuthDto.password;
    const salt = await bcrypt.genSalt();
    const hashed_password = await bcrypt.hash(original_password, salt);
    const user = await this.userService.findOneByEmail(checkAuthDto.email);
    const isMatch = await bcrypt.compare(user.password, hashed_password);
    return isMatch;
  }
}
