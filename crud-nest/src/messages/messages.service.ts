import {
  Body,
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
  Param,
  Query,
} from '@nestjs/common';
import { Message } from './entities/message.entity';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class MessagesService {
  constructor(
    @InjectRepository(Message)
    private readonly messageRepository: Repository<Message>,
  ) {}

  async findAll(): Promise<Message[]> {
    const messages = await this.messageRepository.find();

    return messages;
  }

  async findOne(id: number): Promise<Message> {
    const message = await this.messageRepository.findOne({
      where: { id },
    });

    return message;
  }

  async createMessage(createMessageDto: CreateMessageDto): Promise<Message> {
    const newMessage = {
      ...createMessageDto,
      read: false,
      date: new Date(),
    };

    const message = this.messageRepository.create(newMessage);

    await this.messageRepository.save(message);

    return message;
  }

  async update(id: number, updateMessageDto: UpdateMessageDto) {
    const message = await this.messageRepository.preload({
      id,
      ...updateMessageDto,
    });

    if (!message) throw new HttpException('Message dont exist', 404);

    await this.messageRepository.save(message);

    return message;
  }

  async remove(id: number) {
    const message = await this.messageRepository.findOneBy({
      id,
    });

    if (!message) throw new HttpException('Message dont exist', 404);

    this.messageRepository.remove(message);

    return `Remove message with id ${id}`;
  }
}
