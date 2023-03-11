import{Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity('drop')
export class DropEntity{
    @PrimaryGeneratedColumn()
    Did: number;

    @Column()
    applicationStatus: string;
    
    @Column()
    reason: string;
}
