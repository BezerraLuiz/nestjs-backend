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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const user_entity_1 = require("./entities/user.entity");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
let UsersService = class UsersService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async create(body) {
        try {
            const allUsers = await this.findAll();
            const existUser = allUsers.some((user) => user.mail == body.mail);
            if (existUser) {
                throw new common_1.HttpException('Mail has already registered', common_1.HttpStatus.CONFLICT);
            }
            const userData = {
                ...body,
                passwordHash: body.password,
            };
            const user = this.userRepository.create(userData);
            await this.userRepository.save(user);
            return user;
        }
        catch (error) {
            console.log('Error: ', error);
            throw new common_1.HttpException('Internal server error', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async findAll() {
        return this.userRepository.find();
    }
    async findOne(id) {
        const user = this.userRepository.findOneBy({ id });
        if (!user)
            throw new common_1.HttpException('User dont exist', 404);
        return user;
    }
    async update(id, body) {
        const userData = {
            ...body,
            passwordHash: body.password,
        };
        const user = await this.userRepository.preload({
            id,
            ...userData,
        });
        if (!user)
            throw new common_1.HttpException('User dont exist', 404);
        this.userRepository.save(user);
        return user;
    }
    async remove(id) {
        const user = await this.userRepository.findOneBy({ id });
        if (!user)
            throw new common_1.HttpException('User dont exist', 404);
        return this.userRepository.remove(user);
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], UsersService);
//# sourceMappingURL=users.service.js.map