import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';

@Controller('messages') // Class decorator
export class MessagesController {
  @HttpCode(HttpStatus.OK) // Enum value for 200
  @Get('') // Method decorator
  findAll(): string {
    return 'All messages';
  }

  @HttpCode(200) // Value for 200
  @Get(':id') // Param decorator
  findOne(@Param('id') id: number): string {
    return `One message with id ${id}`;
  }

  @Post('')
  create(@Body('name') name: string, @Body('age') age: number): object {
    return { name: name, age: age };
  }

  @Patch(':id')
  updateOne(@Param('id') id: number, @Body() body: any): object {
    return {
      id,
      ...body,
    };
  }

  @Put(':id')
  update(@Param('id') id: number): string {
    return `Update message with ${id}`;
  }
}
