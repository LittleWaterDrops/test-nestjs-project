import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('me')
  getHelloMe(): string {
    return this.appService.getHelloMe();
  }
}

@Controller('yello')
export class AppYelloController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getYello(): string {
    return this.appService.getYello();
  }

  @Get('me')
  getYelloMe(): string {
    return this.appService.getYelloMe();
  }
}
