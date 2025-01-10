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

@Controller('messages') // Class decorator
export class MessagesController {
  constructor(private readonly messageService: MessagesService) {}

  @HttpCode(HttpStatus.OK) // Enum value for 200
  @Get('') // Method decorator
  findAll(@Query() pagination: any): string {
    return this.messageService.getAllMessages(pagination);
  }

  @HttpCode(200) // Value for 200
  @Get(':id') // Param decorator
  findOne(@Param('id') id: number): string {
    return this.messageService.getOneMessage(id);
  }

  @Post('')
  create(@Body('name') name: string, @Body('age') age: number): object {
    return this.messageService.createMessage(name, age);
  }

  @Patch(':id')
  updateOne(@Param('id') id: number, @Body() body: any): object {
    return this.messageService.updateOne(id, body);
  }

  @Put(':id')
  update(@Param('id') id: number): string {
    return this.messageService.update(id);
  }

  @Delete(':id')
  remove(@Param('id') id: number): string {
    return this.messageService.delete(id);
  }
}
