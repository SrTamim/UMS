import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('facultyNotice')
export class FacultyNotice {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  facultyId: number;

  @Column()
  subject: string;

  @Column()
  Details: string;
}
