import{Column, Entity, ManyToOne, PrimaryGeneratedColumn} from 'typeorm';
import { StudentEntity } from './student.entity';

@Entity('issue')
export class IssueEntity{
    @PrimaryGeneratedColumn()
    Isid: number;

    @Column()
    issueType: string;

    @Column()
    issue: string;

    
  @ManyToOne(() => StudentEntity, (student) => student.issues)
  student: StudentEntity;
}