"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const crypto_1 = require("crypto");
let UsersService = class UsersService {
    constructor() {
        this.users = [];
    }
    findAll() {
        if (!this.users) {
            throw new common_1.HttpException('Dont have users registred', common_1.HttpStatus.NOT_FOUND);
        }
        return this.users;
    }
    create(createUserDto) {
        if (createUserDto.password != createUserDto.confirmPassword) {
            throw new common_1.HttpException('Password not equals', common_1.HttpStatus.NOT_FOUND);
        }
        const { confirmPassword, ...userDetails } = createUserDto;
        const user = {
            id: (0, crypto_1.randomUUID)(),
            ...userDetails,
            createdAt: new Date(),
        };
        this.users.push(user);
        return user;
    }
    update(id, updateUserDto) {
        const indexUser = this.users.findIndex((user) => user.id == id);
        if (indexUser < 0)
            throw new common_1.HttpException('User dont exist', 404);
        const user = this.users[indexUser];
        return (this.users[indexUser] = {
            ...user,
            ...updateUserDto,
        });
    }
    remove(id) {
        const indexUser = this.users.findIndex((user) => user.id == id);
        if (indexUser < 0)
            throw new common_1.HttpException('User dont exist', 404);
        this.users.splice(indexUser, 1);
        return `Remove message with id ${id}`;
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)()
], UsersService);
//# sourceMappingURL=users.service.js.map