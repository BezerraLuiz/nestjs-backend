import {
  Body,
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
  Param,
  Query,
} from '@nestjs/common';
import { Message } from './entities/recado.entity';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';

@Injectable()
export class MessagesService {
  private lastId = 1;
  private messages: Message[] = [
    {
      id: 1,
      text: 'Test Message',
      from: 'Luiz',
      to: 'Luiz',
      read: false,
      date: new Date(),
    },
  ];

  findAll(): Message[] {
    return this.messages;
  }

  findOne(id: number): Message {
    const message = this.messages.find((item) => item.id == id);

    if (!message) {
      throw new NotFoundException('Message not found');
    }

    return message;
  }

  createMessage(createMessageDto: CreateMessageDto): Message {
    this.lastId++;
    const id = this.lastId;
    const newMessage: Message = {
      id,
      ...createMessageDto,
      read: false,
      date: new Date(),
    };

    this.messages.push(newMessage);

    return newMessage;
  }

  update(id: number, updateMessageDto: UpdateMessageDto): Message {
    const indexMessage = this.messages.findIndex((item) => item.id == id);

    if (indexMessage < 0) {
      throw new NotFoundException('Message not exists');
    }

    if (indexMessage >= 0) {
      const message = this.messages[indexMessage];

      return (this.messages[indexMessage] = {
        ...message,
        ...updateMessageDto,
      });
    }
  }

  remove(id: number) {
    const indexMessage = this.messages.findIndex((item) => item.id == id);

    if (indexMessage < 0) {
      throw new NotFoundException('Message not exists');
    }

    if (indexMessage >= 0) this.messages.splice(indexMessage, 1);

    return `Remove message with id ${id}`;
  }
}
