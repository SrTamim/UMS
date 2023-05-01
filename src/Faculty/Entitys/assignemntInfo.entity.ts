import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { FacultyInfo } from './facultyInfo.entity';

@Entity('assignmentInfo')
export class AssignmentInfo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  courseId: number;

  @Column()
  subject: string;

  @Column()
  Details: string;

  @Column()
  created_date: Date;

  @Column()
  due_date: Date;

  //@ManyToOne(() => FacultyInfo, (facultyInfo) => facultyInfo.assignmentInfos)
  //facultyInfo: any;
}
