import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getHelloMe(): string {
    return 'Hello You!';
  }
  getYello(): string {
    return 'Yello World!';
  }
  getYelloMe(): string {
    return 'Yello You!';
  }
}
