import { Column, Entity, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { AssignmentInfo } from './assignemntInfo.entity';
import { FacultyNotice } from './facultyNotice.entity';
import { RequestRoom } from './requestRoom.entity';

@Entity('facultyinfo')
export class FacultyInfo {
  @PrimaryGeneratedColumn()
  Fid: number;

  @Column()
  Fidd: number;

  @Column()
  Fname: string;

  @Column()
  Fprogram: string;

  @Column()
  Fdep: string;

  @Column()
  Faddress: string;

  @Column()
  Fnum: number;

  @Column()
  dob: Date;

  @Column()
  Fsal: number;

  @OneToMany(() => FacultyNotice, (FacultyNotice) => FacultyNotice.facultyinfo)
  facultyNotices: FacultyNotice[];

  @OneToMany(() => RequestRoom, (RequestRoom) => RequestRoom.facultyInfo)
  requestRooms: RequestRoom[];

  // @OneToOne(() => UserInfo, (UserInfo) => UserInfo.facultyInfo)
  // userInfo: UserInfo;

  @OneToMany(() => AssignmentInfo, (AssignmentInfo) => AssignmentInfo.facultyInfo)
  assignmentInfos: AssignmentInfo[];
}
