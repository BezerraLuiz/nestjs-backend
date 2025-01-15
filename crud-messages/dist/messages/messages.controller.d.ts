import { MessagesService } from './messages.service';
import { CreateMessageDto } from './dto/create-message.dto';
import { Message } from './entities/messages.entity';
import { UpdateMessageDto } from './dto/update-message.dto';
export declare class MessagesController {
    private readonly messagesService;
    constructor(messagesService: MessagesService);
    findAll(): Promise<Message[]>;
    findOne(id: number): Promise<Message>;
    create(body: CreateMessageDto): Promise<Message>;
    update(id: number, body: UpdateMessageDto): Promise<Message>;
    delete(id: number): Promise<string>;
}
