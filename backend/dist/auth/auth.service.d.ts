import { UserService } from './../user/user.service';
import { CheckAuthDto } from './dto/check-auth.dto';
export declare class AuthService {
    private readonly userService;
    constructor(userService: UserService);
    check(checkAuthDto: CheckAuthDto): Promise<boolean>;
}
