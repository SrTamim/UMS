import { Module } from '@nestjs/common';
import { StudentController } from './Controllers/student.controller';
import { GradeController } from './Controllers/grade.controller';
import { StudentService } from './Services/student.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentEntity } from './Entities/student.entity';
import { GradeService } from './Services/grade.service';
import { GradeEntity } from './Entities/grade.entity';

@Module({
  imports: [TypeOrmModule.forFeature([StudentEntity,GradeEntity])],
  controllers: [StudentController,GradeController],
  providers: [StudentService,GradeService],
})
export class StudentModule {}
