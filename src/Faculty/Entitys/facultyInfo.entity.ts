import { Column, Entity, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { FacultyNotice } from './facultyNotice.entity';

@Entity('facultyinfo')
export class FacultyInfo {
  @PrimaryGeneratedColumn()
  Fid: number;

  @Column()
  Fidd: number;

  @Column()
  Fname: string;

  @Column()
  Fprogram: string;

  @Column()
  Fdep: string;

  @Column()
  Faddress: string;

  @Column()
  Fnum: number;

  @Column()
  dob: Date;

  @Column()
  Fsal: number;

  @ManyToOne(
    () => FacultyNotice,
    (FacultyNotice) => FacultyNotice.facultyinfo,
    { cascade: true },
  )
  facultyNotices: FacultyNotice[];
}
