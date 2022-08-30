"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("./entities/user.entity");
const bcrypt = require("bcrypt");
const crypto = require("crypto");
let UserService = class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async create(createUserDto) {
        createUserDto.confirmationToken = crypto.randomBytes(32).toString('hex');
        createUserDto.salt = await bcrypt.genSalt();
        createUserDto.password = await bcrypt.hash(createUserDto.password, createUserDto.salt);
        try {
            await this.userRepository.save(createUserDto);
            delete createUserDto.password;
            delete createUserDto.salt;
            return createUserDto;
        }
        catch (error) {
            if (error.code.toString() === '23505') {
                throw new common_1.ConflictException('This email address is already in use');
            }
            else {
                throw new common_1.InternalServerErrorException('Error in saving the user in database');
            }
        }
    }
    async findAll() {
        try {
            return await this.userRepository.find();
        }
        catch (error) {
            console.log('Impossible to find all users');
            return null;
        }
    }
    async findOneById(id) {
        const user = this.userRepository
            .createQueryBuilder('user')
            .select(['user.name', 'user.email'])
            .where('user.id = :id', { id: id })
            .getOne();
        if (!user)
            throw new common_1.NotFoundException('User not found');
        return user;
    }
    async findOneByEmail(email) {
        const user = await this.userRepository.findOneBy({ email });
        if (!user)
            throw new common_1.NotFoundException('User not found');
        return user;
    }
    async update(id, updateUserDto) {
        const user = await this.findOneById(id);
        const { name, email, status } = updateUserDto;
        user.name = name ? name : user.name;
        user.email = email ? email : user.email;
        user.status = status === undefined ? user.status : status;
        try {
            await this.userRepository.save(user);
            return user;
        }
        catch (error) {
            throw new common_1.InternalServerErrorException('Error in saving the user in database');
        }
    }
    async remove(id) {
        const result = await this.userRepository.delete({ id });
        if (result.affected === 0) {
            throw new common_1.NotFoundException('Not found an user with the informed ID');
        }
    }
    async checkCredential(credentialsDto) {
        const { email, password } = credentialsDto;
        let user = new user_entity_1.User();
        user = await this.findOneByEmail(email);
        if (user && (await user.checkPassword(password))) {
            return user;
        }
        else {
            return null;
        }
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map