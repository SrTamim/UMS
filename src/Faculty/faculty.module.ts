import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AssignmentController } from './Controllers/assignemntcontroller.controller';
import { FacultyController } from './Controllers/facultyController.controller';
import { FacultyNoticeController } from './Controllers/facultynoticecontroller.controller';
import { StudentGradeController } from './Controllers/studentgradecontroller.controller';
import { AssignmentInfo } from './Entitys/assignemntInfo.entity';
import { FacultyInfo } from './Entitys/facultyInfo.entity';
import { FacultyNotice } from './Entitys/facultyNotice.entity';
import { StudentgradeInfo } from './Entitys/studentgradeInfo.entity';
import { AssignmentService } from './Services/assignmentservice.service';
import { FacultyService } from './Services/facultyservice.service';
import { NoticeService } from './Services/noticeservice.service';
import { StudentGradeService } from './Services/studentgradeservice.service';
@Module({
  imports: [
    TypeOrmModule.forFeature([
      FacultyInfo,
      FacultyNotice,
      AssignmentInfo,
      StudentgradeInfo,
    ]),
  ],
  controllers: [
    FacultyController,
    FacultyNoticeController,
    AssignmentController,
    StudentGradeController,
  ],
  providers: [
    FacultyService,
    NoticeService,
    AssignmentService,
    StudentGradeService,
  ],
})
export class FacultyModule {}
