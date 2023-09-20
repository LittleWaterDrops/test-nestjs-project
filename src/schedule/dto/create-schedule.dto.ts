import { ApiProperty } from '@nestjs/swagger';

export class CreateScheduleDto {
  @ApiProperty()
  title: string;

  @ApiProperty()
  contents: string;

  @ApiProperty()
  startDate: Date;

  @ApiProperty()
  endDate: Date;

  @ApiProperty()
  isWithTime: boolean;

  @ApiProperty()
  attendeeIds: string[];
}
