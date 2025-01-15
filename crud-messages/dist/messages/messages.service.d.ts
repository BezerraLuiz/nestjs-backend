import { Message } from './entities/messages.entity';
import { Repository } from 'typeorm';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';
export declare class MessagesService {
    private readonly messageRepository;
    constructor(messageRepository: Repository<Message>);
    findAll(): Promise<Message[]>;
    findOne(id: number): Promise<Message>;
    create(body: CreateMessageDto): Promise<Message>;
    update(id: number, body: UpdateMessageDto): Promise<Message>;
    remove(id: number): Promise<string>;
}
