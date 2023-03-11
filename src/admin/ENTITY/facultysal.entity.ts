import { Entity, Column, PrimaryGeneratedColumn,PrimaryColumn } from 'typeorm';

@Entity("facultysal")
export class FacultysalEntity{

@PrimaryGeneratedColumn()
Fsid:number; //(primary key)
@Column()
Fsfid: number; //(foreign key referencing faculty table)
@Column()
month: string;
@Column()
year: string;
@Column()
amount: string;
}