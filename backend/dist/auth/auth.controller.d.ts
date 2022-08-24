import { AuthService } from './auth.service';
import { CheckAuthDto } from './dto/check-auth.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    checkAuth(checkAuthDto: CheckAuthDto): string;
}
