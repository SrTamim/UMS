import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
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

  insertNotice(facultyNotice: FacultyNotice): any {
    const notice = new FacultyNotice();
    notice.facultyId = facultyNotice.facultyId;
    notice.subject = facultyNotice.subject;
    notice.Details = facultyNotice.Details;
    return this.facultyRepo.save(facultyNotice);
  }
}
