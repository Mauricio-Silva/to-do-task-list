import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CheckAuthDto } from './dto/check-auth.dto';

@Controller('login')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  checkAuth(@Body() checkAuthDto: CheckAuthDto): string {
    const check = this.authService.check(checkAuthDto);
    if (check) {
      return 'Authorized';
    } else {
      return 'Unauthorized';
    }
  }
}
