import { CredentialsDto } from './../user/dto/credentials.dto';
import { CreateUserDto } from './../user/dto/create-user.dto';
import { User } from 'src/user/entities/user.entity';
import { UserService } from './../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { Repository } from 'typeorm';
export declare class AuthService {
    private userRepository;
    private readonly userService;
    private jwtService;
    constructor(userRepository: Repository<User>, userService: UserService, jwtService: JwtService);
    signUp(createUserDto: CreateUserDto): Promise<User>;
    signIn(credentialsDto: CredentialsDto): Promise<{
        token: string;
    }>;
}
