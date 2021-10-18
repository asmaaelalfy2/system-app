import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
// import { Model } from 'mongoose';
import { User } from 'src/entity/user.entity';
import { Repository, UpdateResult } from 'typeorm';

@Injectable()
export class UserService {
    constructor(@InjectRepository(User) private userRepository: Repository<User>) { }


    async getAllUsers(): Promise<User[]> {
        return await this.userRepository.find();

    }
    async getUserById(id: number): Promise<User> {
        try {
            return await this.userRepository.findOneOrFail(id);

        } catch (error) {
            throw error;
        }



    }


    async createUser(user: User): Promise<User> {

        const newUser = await this.userRepository.create(user)
        return this.userRepository.save(newUser);

    }

    async updateUser(user: User): Promise<UpdateResult> {

        // const user = await this.userRepository.findOneOrFail(id);
        // user.name = name
        // return this.userRepository.findOneOrFail(user);

        return await this.userRepository.update(user.id, user)
        // return this.userRepository.save(user);

    }

    async deleteUser(id: number): Promise<User> {

        const user = await this.userRepository.findOneOrFail(id);
        return this.userRepository.remove(user)
        // return user;
    }

}