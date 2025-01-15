import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-users.dto';
import { UUID } from 'crypto';
import { UpdateUserDto } from './dto/update-users.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersServices: UsersService) {}

  @HttpCode(200)
  @Get('')
  findAll() {
    return this.usersServices.findAll();
  }

  @Post('')
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersServices.create(createUserDto);
  }

  @HttpCode(200)
  @Patch(':id')
  update(@Param('id') id: UUID, @Body() updateUserDto: UpdateUserDto) {
    this.usersServices.update(id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: UUID) {
    this.usersServices.remove(id);
  }
}
