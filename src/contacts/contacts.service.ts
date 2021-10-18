import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { InjectRepository } from '@nestjs/typeorm';
import { ContactInfo } from 'src/entity/contact.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ContactsService {

    constructor(@InjectRepository(ContactInfo) private contact: Repository<ContactInfo>) { }



    // async getAllUsers(): Promise<User[]> {
    //     return await this.userRepository.find();

    // }
    // async getUserById(id: number): Promise<User> {
    //     try {
    //         return await this.userRepository.findOneOrFail(id);

    //     } catch (error) {
    //         throw error;
    //     }



    // }


    async createContact(contact: ContactInfo): Promise<ContactInfo> {

        const newContact = await this.contact.create(contact)

        return this.contact.save(newContact);

    }

    // async updateUser(user: User): Promise<UpdateResult> {

    //     // const user = await this.userRepository.findOneOrFail(id);
    //     // user.name = name
    //     // return this.userRepository.findOneOrFail(user);

    //     return await this.userRepository.update(user.id, user)
    //     // return this.userRepository.save(user);

    // }

    // async deleteUser(id: number): Promise<User> {

    //     const user = await this.userRepository.findOneOrFail(id);
    //     return this.userRepository.remove(user)
    //     // return user;
    // }

}
