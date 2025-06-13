import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller() // raiz de la aplicacion
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get() // index de la aplicacion
  getHello(): string {
    return this.appService.getHello();
  }
}
