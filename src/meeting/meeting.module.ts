import { Module } from '@nestjs/common';
import { MeetingService } from './meeting.service';
import { MeetingController } from './meeting.controller';
import { Meetings } from 'src/entity/meeting.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Meetings])],

  providers: [MeetingService],
  controllers: [MeetingController]
})
export class MeetingModule { }
