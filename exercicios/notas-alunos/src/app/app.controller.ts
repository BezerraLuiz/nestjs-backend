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
} from '@nestjs/common';
import { AppService } from './app.service';
import { CreateAlunoDto } from './dto/create-aluno.dto';
import { Aluno } from './entities/alunos.entity';
import { UpdateAlunoDto } from './dto/update-aluno.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @HttpCode(200)
  @Get('')
  findAll(): Aluno[] {
    return this.appService.findAll();
  }

  @HttpCode(HttpStatus.OK)
  @Get(':id')
  findOne(@Param('id') id: number): Aluno {
    return this.appService.findOne(id);
  }

  @Post('')
  create(@Body() body: CreateAlunoDto): Aluno {
    return this.appService.create(body);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() body: UpdateAlunoDto): Aluno {
    return this.appService.update(id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: number): string {
    return this.appService.delete(id);
  }
}
