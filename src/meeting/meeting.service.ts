import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Meetings } from 'src/entity/meeting.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MeetingService {
    constructor(@InjectRepository(Meetings) private meeting: Repository<Meetings>) { }

}
