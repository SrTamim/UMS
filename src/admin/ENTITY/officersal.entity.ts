import { Entity, Column, PrimaryGeneratedColumn,PrimaryColumn } from 'typeorm';

@Entity("officersal")
export class OfficersalEntity{

@PrimaryGeneratedColumn()
Ooid:number; //(primary key)
@Column()
Of_id:number; //(foreign key referencing faculty table)
@Column()
month: string;
@Column()
year: string;
@Column()
amount: string;
}