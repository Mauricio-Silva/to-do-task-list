import { CredentialsDto } from './dto/credentials.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
export declare class UserService {
    private userRepository;
    constructor(userRepository: Repository<User>);
    create(createUserDto: CreateUserDto): Promise<CreateUserDto>;
    findAll(): Promise<User[]>;
    findOneById(id: string): Promise<User>;
    findOneByEmail(email: string): Promise<User>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<User>;
    remove(id: string): Promise<void>;
    checkCredential(credentialsDto: CredentialsDto): Promise<User>;
}
