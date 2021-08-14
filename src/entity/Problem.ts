import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity() 
export class Problem {
    
    @PrimaryGeneratedColumn('increment')
    pid: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    category: string;

    @Column()
    score: number;

    @Column()
    flag: string;

    @Column()
    file: string;

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP"})
    date: string;
}