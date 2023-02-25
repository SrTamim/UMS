import { Column, PrimaryGeneratedColumn } from "typeorm";

export class StudentgradeDTO {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  studentId: number;

  @Column()
  curseId: number;

  @Column()
  subject: string;

  @Column()
  grade: string;
}