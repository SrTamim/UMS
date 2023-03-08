import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity("student")
export class StudentEntity{
  @PrimaryGeneratedColumn()
  Sid: number;
  @Column()
  Sidd: string;
  @Column()
  Sname: string;
  @Column()
  Sprogram: string;
  @Column()
  Sdep: string;
  @Column()
  Saddress: string;
  @Column()
  Snum: string;
  @Column()
  Sdob: string;

}