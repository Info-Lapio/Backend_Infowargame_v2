import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import { Problem } from "./Problem";

@Entity() 
export class Event {
    
    @PrimaryGeneratedColumn('uuid')
    uid: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    school: string;

    @Column()
    totalScore: number;

    @Column()
    rank: number;

    @Column()
    solved: Problem[]

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP"})
    date: string;
}