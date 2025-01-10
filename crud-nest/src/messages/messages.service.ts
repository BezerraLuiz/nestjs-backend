import { Body, Injectable, Param, Query } from '@nestjs/common';

@Injectable()
export class MessagesService {
  getAllMessages(@Query() pagination: any): string {
    return 'All messages {} ' + JSON.stringify(pagination);
  }

  getOneMessage(@Param('id') id: number): string {
    return `One message with id ${id}`;
  }

  createMessage(@Body('name') name: string, @Body('age') age: number): object {
    return { name, age };
  }

  updateOne(@Param('id') id: number, @Body() body: any): object {
    return {
      id,
      ...body,
    };
  }

  update(@Param('id') id: number): string {
    return `Update message with id ${id}`;
  }

  delete(@Param('id') id: number) {
    return `Remove message with id ${id}`;
  }
}
