import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CheckAuthDto } from './dto/check-auth.dto';

@Controller('login')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  async checkAuth(@Body() checkAuthDto: CheckAuthDto): Promise<string> {
    const check = await this.authService.check(checkAuthDto);
    if (check === true) {
      return 'Authorized';
    } else {
      return 'Unauthorized';
    }
  }
}
