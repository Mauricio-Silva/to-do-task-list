import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    showMessage(): string;
    findAllUsers(): Promise<User[]>;
    findOneUserById(id: string): Promise<User>;
    findOneUserByEmail(email: string): Promise<User>;
    createUser(createUserDto: CreateUserDto): Promise<CreateUserDto>;
    updateUser(id: string, updateUserDto: UpdateUserDto): Promise<User>;
    removeUser(id: string): Promise<string>;
}
