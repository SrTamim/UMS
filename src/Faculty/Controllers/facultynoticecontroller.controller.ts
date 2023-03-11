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

  
}
