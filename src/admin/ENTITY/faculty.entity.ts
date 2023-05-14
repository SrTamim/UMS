import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn,ManyToOne } from 'typeorm';
import { FacultysalEntity } from "./facultysal.entity"

@Entity("faculty")
export class FacultyEntity{
  @PrimaryGeneratedColumn()
  Fid: number;
  @Column()
  Fidd: string;
  @Column()
  Fname: string;
  @Column()
  Fprogram: string;
  @Column()
  Fdep: string;
  @Column()
  Faddress: string;
  @Column()
  Fnum: string;
  @Column()
  Fdob: string;

  // @ManyToOne(() => FacultysalEntity, (facultysal) => facultysal.facultys)
  // facultysal: FacultysalEntity;

}