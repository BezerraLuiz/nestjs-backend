import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller() // Decorator que define a classe como um controlador e a rota.
export class AppController {
  constructor(private readonly appService: AppService) {} // Injeção de dependência.

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
