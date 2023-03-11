import { Entity, Column, PrimaryGeneratedColumn,PrimaryColumn } from 'typeorm';

@Entity("notice")
export class NoticeEntity{
  @PrimaryGeneratedColumn()
  Nid: number;
  @Column()
  Nsub: string;
  @Column()
  Ndetails: string;
}