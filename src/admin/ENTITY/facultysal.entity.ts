import { Entity, Column, PrimaryGeneratedColumn,PrimaryColumn } from 'typeorm';

@Entity("facultysal")
export class FacultysalEntity{

@PrimaryGeneratedColumn()
Ffid:number; //(primary key)
@Column()
Ff_id: number; //(foreign key referencing faculty table)
@Column()
month: string;
@Column()
year: string;
@Column()
amount: string;
}