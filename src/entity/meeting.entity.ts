// import { userInfo } from "os";
import { Column, Entity, ManyToMany, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";


@Entity()
export class Meetings {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    zoomUrl: string

    // @ManyToMany(() => User, user => user.meetings)
    // attendees: User[]



}