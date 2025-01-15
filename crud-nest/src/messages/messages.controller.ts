import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { MessagesService } from './messages.service';
import { Message } from './entities/message.entity';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';

@Controller('messages') // Class decorator
export class MessagesController {
  constructor(private readonly messageService: MessagesService) {}

  @HttpCode(HttpStatus.OK) // Enum value for 200
  @Get('') // Method decorator
  async findAll(): Promise<Message[]> {
    return this.messageService.findAll();
  }

  @HttpCode(200) // Value for 200
  @Get(':id') // Param decorator
  findOne(@Param('id') id: number): Promise<Message> {
    return this.messageService.findOne(id);
  }

  @HttpCode(201)
  @Post('')
  create(@Body() createMessageDto: CreateMessageDto): object {
    return this.messageService.createMessage(createMessageDto);
  }

  @HttpCode(200)
  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateMessageDto: UpdateMessageDto,
  ) {
    return this.messageService.update(id, updateMessageDto);
  }

  @HttpCode(200)
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number): Promise<string> {
    console.log(id, typeof id);
    return this.messageService.remove(id);
  }
}
