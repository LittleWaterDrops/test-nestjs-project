import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { ScheduleService } from './schedule.service';
import { CreateScheduleDto } from './dto/create-schedule.dto';
import { UpdateScheduleDto } from './dto/update-schedule.dto';
import express from 'express';

@Controller('schedule')
export class ScheduleController {
  constructor(private readonly scheduleService: ScheduleService) {}

  // @Post()
  // async create(@Body() body: CreateScheduleDto) {
  //   return this.scheduleService.create(body);
  // }

  // @Get()
  // async findAll(@Query('page') page = 0, @Query('limit') limit = 10) {
  //   return this.scheduleService.findAll(page, limit);
  // }

  // @Get(':id')
  // async findOne(@Param('id') id: string) {
  //   return this.scheduleService.findOne(id);
  // }

  // @Patch(':id')
  // async update(@Param('id') id: string, @Body() body: UpdateScheduleDto) {
  //   return this.scheduleService.update(id, body);
  // }

  // @Delete(':id')
  // async remove(@Param('id') id: string) {
  //   return this.scheduleService.remove(id);
  // }
}
