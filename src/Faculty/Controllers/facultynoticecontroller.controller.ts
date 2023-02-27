import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
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
  @UsePipes(new ValidationPipe())
  insertNotice(@Body() noticedto: NoticeDto): any {
    return this.facultyNoticeService.insertNotice(noticedto);
  }

  @Put('/updatenotice')
  @UsePipes(new ValidationPipe())
  updateNotice(@Body() noticedto: NoticeDto): any {
    return this.facultyNoticeService.updateNotice(noticedto, noticedto.id);
  }

  @Put('/updatenoticeBy/:id')
  @UsePipes(new ValidationPipe())
  updateNoticeById(
    @Body() noticedto: NoticeDto,
    @Param('id', ParseIntPipe) id: number,
  ): any {
    return this.facultyNoticeService.updateNotice(noticedto, id);
  }

  @Delete('/deletenotice/:id')
  @UsePipes(new ValidationPipe())
  deleteNotice(@Param('id', ParseIntPipe) id: number): any {
    return this.facultyNoticeService.deleteNotice(id);
  }
}
