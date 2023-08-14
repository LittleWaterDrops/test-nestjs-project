import { Module } from '@nestjs/common';
import { AppController, AppYelloController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';

@Module({
  imports: [UsersModule],
  controllers: [AppController, AppYelloController],
  providers: [AppService],
})
export class AppModule {}
