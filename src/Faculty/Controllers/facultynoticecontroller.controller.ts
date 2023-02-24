import { Body, Controller, Get, Post } from '@nestjs/common';
import { FacultyNotice } from '../Entitys/facultyNotice.entity';
import { NoticeService } from '../Services/noticeservice.service';

@Controller('/notice')
export class FacultyNoticeController {
  constructor(private readonly facultyNoticeService: NoticeService) {}

  @Get('/getnotice')
  getNotice(): any {
    return this.facultyNoticeService.getNotice();
  }

  @Post('/insertnotice')
  insertNotice(@Body() facultyNotice: FacultyNotice): any {
    return this.facultyNoticeService.insertNotice(facultyNotice);
  }
}
