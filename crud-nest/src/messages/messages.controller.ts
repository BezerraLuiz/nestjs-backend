import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { MessagesService } from './messages.service';
import { Message } from './entities/recado.entity';

@Controller('messages') // Class decorator
export class MessagesController {
  constructor(private readonly messageService: MessagesService) {}

  @HttpCode(HttpStatus.OK) // Enum value for 200
  @Get('') // Method decorator
  findAll(): Message[] {
    return this.messageService.findAll();
  }

  @HttpCode(200) // Value for 200
  @Get(':id') // Param decorator
  findOne(@Param('id') id: number): Message {
    return this.messageService.findOne(id);
  }

  @HttpCode(201)
  @Post('')
  create(@Body() body: Message): object {
    return this.messageService.createMessage(body);
  }

  @HttpCode(200)
  @Patch(':id')
  update(@Param('id') id: number, @Body() body: any): object {
    return this.messageService.update(id, body);
  }

  @HttpCode(200)
  @Delete(':id')
  remove(@Param('id') id: number): string {
    return this.messageService.remove(id);
  }
}
