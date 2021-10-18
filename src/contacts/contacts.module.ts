import { Module } from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { ContactsController } from './contacts.controller';
import { ContactInfo } from 'src/entity/contact.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ContactInfo])],

  providers: [ContactsService],
  controllers: [ContactsController]
})
export class ContactsModule { }
