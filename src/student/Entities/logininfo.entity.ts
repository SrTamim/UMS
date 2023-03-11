import{Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity('logininfo')
export class LoginEntity{
    @PrimaryGeneratedColumn()
    lgid: number;

    @Column()
    email: string;
    
    @Column()
    password: string;
}
