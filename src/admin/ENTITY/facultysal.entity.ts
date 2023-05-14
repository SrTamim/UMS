import { Entity, Column, PrimaryGeneratedColumn,PrimaryColumn,ManyToOne,OneToMany } from 'typeorm';
import { FacultyEntity } from "./faculty.entity"

@Entity("facultysal")
export class FacultysalEntity{

@PrimaryGeneratedColumn()
Fid:number; //(primary key)
@Column()
month: string;
@Column()
year: string;
@Column()
amount: string;

// @OneToMany(() => FacultyEntity, (faculty) => faculty.facultysal)
// facultys: FacultyEntity[]

}