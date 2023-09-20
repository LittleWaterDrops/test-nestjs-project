import { Module } from '@nestjs/common';
import { AppController, AppYelloController } from './app.controller';
import { AppService } from './app.service';
import * as Modules from './modules';
import { MongooseModule } from '@nestjs/mongoose';
import Constants from './constants';

@Module({
  imports: [
    MongooseModule.forRoot(
      `${Constants.mongo.host}/${Constants.mongo.collection}`,
    ),
    ...Object.values(Modules),
  ],
  controllers: [AppController, AppYelloController],
  providers: [AppService],
})
export class AppModule {}
