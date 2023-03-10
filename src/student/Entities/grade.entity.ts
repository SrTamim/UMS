import{Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity('grade')
export class GradeEntity{
    @PrimaryGeneratedColumn()
    Gid: number;

    @Column()
    year: number;

    @Column()
    xm: string;

    @Column()
    grade: string;

}
