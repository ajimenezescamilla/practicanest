import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World! Esto es un ejemplo de NestJS con TypeScript.';
  }
}
