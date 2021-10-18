import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Model } from 'mongoose';
import { User } from 'src/entity/user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Get()
    index(): Promise<User[]> {
        return this.userService.getAllUsers();
    }

    @Post()
    async create(@Body() entitytData: User): Promise<User> {
        return this.userService.createUser(entitytData);
    }

    @Put('/:id/update')



    async update(@Param('id') id, @Body() entityData: User): Promise<any> {
        entityData.id = Number(id);
        return this.userService.updateUser(entityData);
    }

    @Delete('/delete/:id')
    async delete(@Param('id') id): Promise<any> {
        return this.userService.deleteUser(id);
    }

}

