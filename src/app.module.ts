import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { config } from 'rxjs';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
// import ormconfig from './ormconfig'
import * as ormconfig from './ormconfig';
import { ContactsModule } from './contacts/contacts.module';
import { MeetingModule } from './meeting/meeting.module';
import { TaskModule } from './task/task.module';
@Module({
  // imports: [TypeOrmModule.forRoot(ormconfig), UserModule, ContactsModule, MeetingModule, TaskModule],
  imports: [TypeOrmModule.forRoot(ormconfig), UserModule],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
