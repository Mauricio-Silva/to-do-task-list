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
        const original_password = createUserDto.password;
        const salt = await bcrypt.genSalt();
        createUserDto.password = await bcrypt.hash(original_password, salt);
        createUserDto.token = crypto.randomBytes(32).toString('hex');
        await this.userRepository.save(createUserDto);
        createUserDto.password = '';
        return createUserDto;
    }
    async findAll() {
        return await this.userRepository.find();
    }
    async findOne(id) {
        return await this.userRepository.findOneBy({ id });
    }
    async update(userId, updateUserDto) {
        const original_password = updateUserDto.password;
        const salt = await bcrypt.genSalt();
        updateUserDto.password = await bcrypt.hash(original_password, salt);
        await this.userRepository.update({
            id: userId,
        }, {
            name: updateUserDto.name,
            email: updateUserDto.email,
            password: updateUserDto.password,
            token: updateUserDto.token,
            createAt: updateUserDto.createAt,
            updateAt: updateUserDto.updateAt,
        });
        return await this.findOne(userId);
    }
    remove(id) {
        this.userRepository.delete({ id });
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map