import{Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity('facfeedback')
export class FacfeedbackEntity{
    @PrimaryGeneratedColumn()
    Fdid: number;

    @Column()
    feedback: string;

}
