import { Body, Controller, Post } from '@nestjs/common';
import { ContactInfo } from 'src/entity/contact.entity';
import { User } from 'src/entity/user.entity';
import { ContactsService } from './contacts.service';

@Controller('contacts')
export class ContactsController {

    constructor(private readonly contactService: ContactsService) { }

    // @Get()
    // index(): Promise<User[]> {
    //     return this.userService.getAllUsers();
    // }

    @Post()
    async create(@Body() entitytData: ContactInfo): Promise<ContactInfo> {
        return this.contactService.createContact(entitytData);
    }

    // @Put('/:id/update')



    // async update(@Param('id') id, @Body() entityData: User): Promise<any> {
    //     entityData.id = Number(id);
    //     return this.userService.updateUser(entityData);
    // }

    // @Delete('/delete/:id')
    // async delete(@Param('id') id): Promise<any> {
    //     return this.userService.deleteUser(id);
    // }

}

