import { Injectable } from '@nestjs/common';
import { CreateScheduleDto } from './dto/create-schedule.dto';
import { UpdateScheduleDto } from './dto/update-schedule.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Schedule } from './schemas/schedule.schema';
import { Model } from 'mongoose';
// import { User } from 'src/users/schemas/user.schema';

@Injectable()
export class ScheduleService {
  // constructor(
  //   // @InjectModel(User.name) private readonly userModel: Model<User>,
  //   @InjectModel(Schedule.name) private readonly scheduleModel: Model<Schedule>,
  // ) {}
  // async create(body: CreateScheduleDto) {
  //   const { attendeeIds, ...attributes } = body;
  //   // const attendees = await Promise.all(
  //   //   attendeeIds.map((id) => this.userModel.findById(id)),
  //   // );
  //   const newSchedule = new this.scheduleModel({
  //     ...attributes,
  //     // attendees,
  //   });
  //   return newSchedule.save();
  // }
  // async findAll(page: number, limit: number) {
  //   return await this.scheduleModel
  //     .find()
  //     .skip(page * limit)
  //     .limit(limit);
  // }
  // async findOne(id: string) {
  //   return await this.scheduleModel.findById(id);
  // }
  // async update(id: string, body: UpdateScheduleDto) {
  //   const { attendeeIds, ...attributes } = body;
  //   // const attendees = await Promise.all(
  //   //   attendeeIds.map((id) => this.userModel.findById(id)),
  //   // );
  //   const updatedSchedule = new this.scheduleModel({
  //     ...attributes,
  //     // attendees,
  //   });
  //   return updatedSchedule.updateOne({ id, attributes });
  //   // return updatedSchedule.updateOne({ id, attendees, attributes });
  // }
  // async remove(id: string) {
  //   await this.scheduleModel.findOneAndRemove({ id });
  // }
}
