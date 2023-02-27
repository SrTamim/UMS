import{Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity('student')
export class StudentEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    CGPA: number;

    @Column()
    semester: number;

    @Column()
    department: string;

    @Column()
    studentId: string;

    @Column()
    address: string;

    @Column()
    phone: string;

}