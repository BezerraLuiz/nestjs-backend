import { Controller, Get } from '@nestjs/common';

@Controller('concepts')
export class ConceptsController {
  @Get()
  getConcepts(): string {
    return 'Controller Concepts';
  }
}
