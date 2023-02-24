import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FacultyController } from './Controllers/facultyController.controller';
import { FacultyNoticeController } from './Controllers/facultynoticecontroller.controller';
import { FacultyInfo } from './Entitys/facultyInfo.entity';
import { FacultyNotice } from './Entitys/facultyNotice.entity';
import { FacultyService } from './Services/facultyservice.service';
import { NoticeService } from './Services/noticeservice.service';
@Module({
  imports: [TypeOrmModule.forFeature([FacultyInfo, FacultyNotice])],
  controllers: [FacultyController, FacultyNoticeController],
  providers: [FacultyService, NoticeService],
})
export class FacultyModule {}
