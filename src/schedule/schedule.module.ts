import { Module } from '@nestjs/common';
import { ScheduleService } from './schedule.service';
import { ScheduleController } from './schedule.controller';
import { MongooseModule } from '@nestjs/mongoose';
// import { User } from 'src/decorators/user.decorator';
// import { UserSchema } from 'src/users/schemas/user.schema';
// import {
//   Vacation,
//   VacationSchema,
// } from 'src/vacations/schemas/vacation.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      // { name: User.name, schema: UserSchema },
      // { name: Vacation.name, schema: VacationSchema },
    ]),
  ],
  controllers: [ScheduleController],
  providers: [ScheduleService],
})
export class ScheduleModule {}
