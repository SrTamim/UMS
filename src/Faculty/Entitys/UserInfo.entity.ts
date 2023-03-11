import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('UserInfo')
export class UserInfo {
  @PrimaryGeneratedColumn()
  Uid: number;

  @Column()
  email: string;

  @Column()
  password: string;
}
