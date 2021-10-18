import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from 'src/entity/task.entity';
import { User } from 'src/entity/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TaskService {

    constructor(@InjectRepository(Task) private tasks: Repository<Task>) {
    }


    // async createTasks(task: Task, user: User): Promise<Task> {

    //     const newTask = await this.tasks.create(task)
    //     newTask.user = user;

    //     return this.tasks.save(newTask);

    // }
}
