import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity("officersal")
export class OfficersalEntity{

@Column()
Oid //(primary key)
@Column()
Of_id //(foreign key referencing faculty table)
@Column()
month: string;
@Column()
year: string;
@Column()
amount: string;
}