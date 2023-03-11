import{Column, Entity, OneToMany, PrimaryGeneratedColumn} from 'typeorm';
import { IssueEntity } from './issue.entity';

@Entity('student')
export class StudentEntity{
    @PrimaryGeneratedColumn()
    Sid: number;

    @Column()
    Sname: string;

    @Column()
    Sdep: string;

    @Column()
    Sidd: string;

    @Column()
    Saddress: string;

    @Column()
    Snum: string;

    @Column()
    Sdob: string;

    @Column()
    Sprogram: string;
    
    @OneToMany(() => IssueEntity, (issue) => issue.student)
    issues: IssueEntity[];


}
