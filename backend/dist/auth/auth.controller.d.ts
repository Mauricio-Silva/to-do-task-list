import { CredentialsDto } from './../user/dto/credentials.dto';
import { CreateUserDto } from './../user/dto/create-user.dto';
import { User } from 'src/user/entities/user.entity';
import { AuthService } from './auth.service';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    signUp(createUserDto: CreateUserDto): Promise<{
        message: string;
    }>;
    signIn(credentialsDto: CredentialsDto): Promise<{
        token: string;
    }>;
    getMetadataArgsStorage(user: User): User;
}
