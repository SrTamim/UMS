import{Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity('issue')
export class IssueEntity{
    @PrimaryGeneratedColumn()
    Isid: number;

    @Column()
    issueType: string;

    @Column()
    issue: string;
}