import { Body, Controller, Post } from '@nestjs/common';
// import { Body } from '@nestjs/common/decorators/http/route-params.decorator';
import { Task } from 'src/entity/task.entity';
import { User } from 'src/entity/user.entity';
import { TaskService } from './task.service';

@Controller('task')
export class TaskController {
    constructor(private readonly taskService: TaskService) { }

    // @Post()
    // async create(@Body() entitytData: Task, user: User): Promise<Task> {
    //     return this.taskService.createTasks(entitytData, user);
    // }

}
