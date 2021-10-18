import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entity/user.entity';
import { UserService } from './user.service';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {

    constructor(private userService: UserService) { }

}
