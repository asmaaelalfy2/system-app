// import { userInfo } from "os";
import { Column, Entity, ManyToMany, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";


@Entity()
export class Task {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string

    // @ManyToOne(() => User, user => user.tasks, { onDelete: "SET NULL" })
    // user: User



}