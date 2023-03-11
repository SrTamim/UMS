import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity("admin")
export class AdminEntity{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
  @Column()
  email:string;
  @Column()
  pass:string;
  @Column()
  address: string;

  @Column()
  filename: string;

}