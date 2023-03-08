import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity("officer")
export class OfficerEntity{
  @PrimaryGeneratedColumn()
  Oid: number;
  @Column()
  Oidd: number;
  @Column()
  Oname: string;
  @Column()
  Odep: string;
  @Column()
  Oaddress: string;
  @Column()
  Onum: string;
  @Column()
  Odob: string;

}