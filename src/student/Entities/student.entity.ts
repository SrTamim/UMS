import{Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

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

}
