import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
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

  @OneToOne(() => FacultysalEntity)
  @JoinColumn()
  facultysal: FacultysalEntity

}