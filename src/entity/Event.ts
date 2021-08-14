import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity() 
export class Event {
    
    @PrimaryGeneratedColumn('increment')
    eid: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    images: string[];

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP"})
    date: string;
}