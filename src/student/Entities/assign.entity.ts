import{Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity('assign')
export class AssignEntity{
    @PrimaryGeneratedColumn()
    asid: number;

    @Column()
    assignmentName: string;
    
    @Column()
    filename: string;
}
