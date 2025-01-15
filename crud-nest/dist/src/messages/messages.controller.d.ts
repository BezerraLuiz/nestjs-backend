import { MessagesService } from './messages.service';
import { Message } from './entities/message.entity';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';
export declare class MessagesController {
    private readonly messageService;
    constructor(messageService: MessagesService);
    findAll(): Promise<Message[]>;
    findOne(id: number): Promise<Message>;
    create(createMessageDto: CreateMessageDto): object;
    update(id: number, updateMessageDto: UpdateMessageDto): Promise<Message>;
    remove(id: number): Promise<string>;
}
