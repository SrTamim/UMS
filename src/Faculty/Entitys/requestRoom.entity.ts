import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { FacultyInfo } from "./facultyInfo.entity";

@Entity('RequestRoom')
export class RequestRoom {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  Fid: number;

  @Column()
  room: string;

  @Column()
  reason: string;

  @Column()
  date: Date;

  @Column()
  time: Date;

  @ManyToOne(() => FacultyInfo, (facultyInfo) => facultyInfo.requestRooms)
  facultyInfo: FacultyInfo;
}
