import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity("officer")
export class OfficerEntity{
  @PrimaryGeneratedColumn()
  Oid: number;
  @Column()
  Oidd: string;
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
  @Column()
  Osal: string;

}