import { Entity, Column, PrimaryGeneratedColumn,PrimaryColumn } from 'typeorm';

@Entity("officersal")
export class OfficersalEntity{

@PrimaryGeneratedColumn()
Osid:number; //(primary key)
@Column()
Osfid:number; //(foreign key referencing faculty table)
@Column()
month: string;
@Column()
year: string;
@Column()
amount: string;
}