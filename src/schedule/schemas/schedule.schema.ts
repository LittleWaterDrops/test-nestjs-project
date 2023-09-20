import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
// import { User } from 'src/users/schemas/user.schema';

export type ScheduleDocument = HydratedDocument<Schedule>;

@Schema()
export class Schedule {
  @Prop()
  title: string;

  @Prop()
  contents: string;

  @Prop()
  startDate: Date;

  @Prop()
  endDate: Date;

  @Prop()
  isWithTime: boolean;

  // @Prop()
  // attendees: User[];
}

export const ScheduleSchema = SchemaFactory.createForClass(Schedule);
