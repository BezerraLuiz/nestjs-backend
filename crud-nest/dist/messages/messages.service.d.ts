import { Message } from './entities/message.entity';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';
import { Repository } from 'typeorm';
export declare class MessagesService {
    private readonly messageRepository;
    constructor(messageRepository: Repository<Message>);
    findAll(): Promise<Message[]>;
    findOne(id: number): Promise<Message>;
    createMessage(createMessageDto: CreateMessageDto): Promise<Message>;
    update(id: number, updateMessageDto: UpdateMessageDto): Promise<Message>;
    remove(id: number): Promise<string>;
}
