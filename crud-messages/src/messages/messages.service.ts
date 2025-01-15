import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Message } from './entities/messages.entity';
import { Repository } from 'typeorm';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';

@Injectable()
export class MessagesService {
  constructor(
    @InjectRepository(Message)
    private readonly messageRepository: Repository<Message>,
  ) {}

  async findAll(): Promise<Message[]> {
    return await this.messageRepository.find();
  }

  async findOne(id: number): Promise<Message> {
    const message: Message = await this.messageRepository.findOne({
      where: { id },
    });

    return message;
  }

  async create(body: CreateMessageDto): Promise<Message> {
    try {
      const newMessage = {
        ...body,
      };

      const message: Message = this.messageRepository.create(newMessage);

      await this.messageRepository.save(newMessage);

      return message;
    } catch (error) {
      console.error('Error: ' + error);
      throw new HttpException('Internal server error', 500);
    }
  }

  async update(id: number, body: UpdateMessageDto): Promise<Message> {
    const message: Message = await this.messageRepository.preload({
      id,
      ...body,
    });

    this.messageRepository.save(message);

    return message;
  }

  async remove(id: number): Promise<string> {
    const message: Message = await this.messageRepository.findOneBy({
      id,
    });

    this.messageRepository.remove(message);

    return `Removed message with id ${id}`;
  }
}
