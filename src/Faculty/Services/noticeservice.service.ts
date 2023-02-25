import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NoticeDto } from '../DTOs/noticeDto.dto';
import { FacultyNotice } from '../Entitys/facultyNotice.entity';

@Injectable()
export class NoticeService {
  constructor(
    @InjectRepository(FacultyNotice)
    private facultyRepo: Repository<FacultyNotice>,
  ) {}

  getNotice(): any {
    return this.facultyRepo.find();
  }

  insertNotice(noticedto: NoticeDto): any {
    const notice = new FacultyNotice();
    notice.facultyId = noticedto.facultyId;
    notice.subject = noticedto.subject;
    notice.Details = noticedto.Details;
    return this.facultyRepo.save(noticedto);
  }

  updateNotice(noticedto, id): any {
    return this.facultyRepo.update(id, noticedto);
  }

  updateNoticeById(noticedto, id): any {
    return this.facultyRepo.update(id, noticedto);
  }

  deleteNotice(id): any {
    return this.facultyRepo.delete(id);
  }
}
