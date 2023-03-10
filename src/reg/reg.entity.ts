import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity("reg")
export class RegEntity{
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  email: string;
  @Column()
  pass: string;

}