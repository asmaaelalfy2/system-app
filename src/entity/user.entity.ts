import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { ContactInfo } from "./contact.entity";
import { Meetings } from "./meeting.entity";
import { Task } from "./task.entity";


@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;



    @ApiProperty()

    @Column()
    name: string

    @ApiProperty()
    @Column()
    email: string

    // @ApiProperty()
    @Column()
    passwords: string

    // @OneToOne(() => ContactInfo, contactInfo => contactInfo.user)
    // contactInfo: ContactInfo

    // @OneToMany(() => Task, task => task.user)
    // tasks: Task[]

    // @OneToMany(() => User, user => user.directReports)
    // manager: User

    // @ManyToOne(() => User, user => user.manager)
    // directReports: User[]

    // @ManyToMany(() => Meetings, meeting => meeting.attendees)
    // @JoinTable()
    // meetings: Meetings[]


}