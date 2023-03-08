import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity("facultysal")
export class FacultysalEntity{

@Column()
Fid //(primary key)
@Column()
ff_id //(foreign key referencing faculty table)
@Column()
month: string;
@Column()
year: string;
@Column()
amount: string;
}