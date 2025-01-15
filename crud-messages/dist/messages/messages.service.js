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
exports.MessagesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const messages_entity_1 = require("./entities/messages.entity");
const typeorm_2 = require("typeorm");
let MessagesService = class MessagesService {
    constructor(messageRepository) {
        this.messageRepository = messageRepository;
    }
    async findAll() {
        return await this.messageRepository.find();
    }
    async findOne(id) {
        const message = await this.messageRepository.findOne({
            where: { id },
        });
        return message;
    }
    async create(body) {
        try {
            const newMessage = {
                ...body,
            };
            const message = this.messageRepository.create(newMessage);
            await this.messageRepository.save(newMessage);
            return message;
        }
        catch (error) {
            console.error('Error: ' + error);
            throw new common_1.HttpException('Internal server error', 500);
        }
    }
    async update(id, body) {
        const message = await this.messageRepository.preload({
            id,
            ...body,
        });
        this.messageRepository.save(message);
        return message;
    }
    async remove(id) {
        const message = await this.messageRepository.findOneBy({
            id,
        });
        this.messageRepository.remove(message);
        return `Removed message with id ${id}`;
    }
};
exports.MessagesService = MessagesService;
exports.MessagesService = MessagesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(messages_entity_1.Message)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], MessagesService);
//# sourceMappingURL=messages.service.js.map