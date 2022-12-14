import { User } from './../user/entities/user.entity';
import { Strategy } from 'passport-jwt';
import { Repository } from 'typeorm';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private userRepository;
    constructor(userRepository: Repository<User>);
    validate(payload: {
        id: string;
    }): Promise<User>;
}
export {};
