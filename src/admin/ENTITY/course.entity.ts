import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity("course")
export class CourseEntity{
  @PrimaryGeneratedColumn()
  Cid: number;

  @Column()
  Cname: string;
  @Column()
  credit: string;
  @Column()
  room: string;
  @Column()
  time: string;

}