import { Column, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { FacultyInfo } from './facultyInfo.entity';

@Entity('facultyNotice')
export class FacultyNotice {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  subject: string;

  @Column()
  Details: string;

  @ManyToOne(() => FacultyInfo, (FacultyInfo) => 
  FacultyInfo.facultyNotices)
  facultyinfo: FacultyInfo;
}
