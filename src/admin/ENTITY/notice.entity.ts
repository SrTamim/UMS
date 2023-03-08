import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity("notice")
export class NoticeEntity{
  @PrimaryGeneratedColumn()
  Nid: number;

  @Column()
  details: string;
}