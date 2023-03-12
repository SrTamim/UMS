import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AssignmentController } from './Controllers/assignemntcontroller.controller';
import { FacultyController } from './Controllers/facultyController.controller';
import { FacultyNoticeController } from './Controllers/facultynoticecontroller.controller';
import { StudentGradeController } from './Controllers/studentgradecontroller.controller';
import { AssignmentInfo } from './Entitys/assignemntInfo.entity';
import { FacultyInfo } from './Entitys/facultyInfo.entity';
import { FacultyNotice } from './Entitys/facultyNotice.entity';
import { FileUplode } from './Entitys/fileUplode.entity';
import { RequestRoom } from './Entitys/requestRoom.entity';
import { StudentgradeInfo } from './Entitys/studentgradeInfo.entity';
import { UserInfo } from './Entitys/UserInfo.entity';
import { AssignmentService } from './Services/assignmentservice.service';
import { FacultyService } from './Services/facultyservice.service';
import { FileUplodeservice } from './Services/fileUplodeservice.service';
import { NoticeService } from './Services/noticeservice.service';
import { RequestRoomService } from './Services/RequestRoomservice.service';
import { StudentGradeService } from './Services/studentgradeservice.service';
import { UserInfoservice } from './Services/UserInfoservice.service';
//import { MailerModule } from '@nestjs-modules/mailer';
@Module({
  imports: [
    // MailerModule.forRoot({
    //   transport: {
    //     host: 'smtp.gmail.com',
    //     port: 465,
    //     ignoreTLS: true,
    //     secure: true,
    //     auth: {
    //       user: 'kfahim2280@gmail.com',
    //       pass: 'gdbgoasutcuptbmd',
    //     },
    //   },
    // }),
    TypeOrmModule.forFeature([
      FacultyInfo,
      FacultyNotice,
      AssignmentInfo,
      StudentgradeInfo,
      RequestRoom,
      FileUplode,
      UserInfo,
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
    RequestRoomService,
    FileUplodeservice,
    UserInfoservice,
  ],
})
export class FacultyModule {}
