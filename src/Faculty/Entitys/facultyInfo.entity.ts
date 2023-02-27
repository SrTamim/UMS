import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { FacultyNotice } from './facultyNotice.entity';

@Entity('facultyinfo')
export class FacultyInfo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  universityId: number;

  @Column()
  password: string;

  @Column()
  Email: string;

  @Column()
  photo: number;

  @Column()
  PhoneNumber: number;

  @Column()
  department: string;

  @Column()
  Sex: string;

  @Column()
  MaritalStatus: string;

  @Column()
  BloodGroup: string;

  @Column()
  PermanentAddress: string;

  @Column()
  DOB: Date;

  @Column()
  BSC: string;

  @Column()
  MSC: string;

  @Column()
  SSC: string;

  @Column()
  HSC: string;
/*
  @OneToOne(() => FacultyNotice, (facultyNotice) => facultyNotice.facultyId)
  facultyNotice: FacultyNotice;
  */
}
