import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { NoticeDto } from '../DTOs/noticeDto.dto';
import { NoticeService } from '../Services/noticeservice.service';

@Controller('/notice')
export class FacultyNoticeController {
  constructor(private readonly facultyNoticeService: NoticeService) {}

  @Get('/getnotice')
  getNotice(): any {
    return this.facultyNoticeService.getNotice();
  }

  @Post('/insertnotice')
  insertNotice(@Body() noticedto: NoticeDto): any {
    return this.facultyNoticeService.insertNotice(noticedto);
  }

  @Put('/updatenotice')
  updateNotice(@Body() noticedto: NoticeDto): any {
    return this.facultyNoticeService.updateNotice(noticedto, noticedto.id);
  }

  @Put('/updatenoticeBy/:id')
  updateNoticeById(@Body() noticedto: NoticeDto, @Param('id') id: number): any {
    return this.facultyNoticeService.updateNotice(noticedto, id);
  }

  @Delete('/deletenotice/:id')
  deleteNotice(@Param('id') id: number): any {
    return this.facultyNoticeService.deleteNotice(id);
  }
}
