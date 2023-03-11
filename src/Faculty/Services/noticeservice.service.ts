import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NoticeDto } from '../DTOs/noticeDto.dto';
import { FacultyInfo } from '../Entitys/facultyInfo.entity';
import { FacultyNotice } from '../Entitys/facultyNotice.entity';

@Injectable()
export class NoticeService {
  mailerService: any;
  constructor(
    @InjectRepository(FacultyNotice)
    private NoticeRepo: Repository<FacultyNotice>,
    @InjectRepository(FacultyInfo)
    private facultyRepo: Repository<FacultyInfo>,
  ) {}

  getNotice(): any {
    return this.NoticeRepo.find();
  }

  insertNotice(noticedto: NoticeDto, id: any): any {
    const notice = new FacultyNotice();
    notice.subject = noticedto.subject;
    notice.Details = noticedto.Details;
    this.NoticeRepo.save(noticedto);
    const faculty = this.facultyRepo.find({
      where: { Fid: 2 },
      relations: {
        facultyNotices: true,
      },
    });
    //faculty.facultyNotices = [...faculty.facultyNotices,notice];
  }

  updateNotice(noticedto, id): any {
    return this.NoticeRepo.update(id, noticedto);
  }

  updateNoticeById(noticedto, id): any {
    return this.NoticeRepo.update(id, noticedto);
  }

  deleteNotice(id): any {
    return this.NoticeRepo.delete(id);
  }

  async sendEmail(mydata) {
    return await this.mailerService.sendMail({
      from: 'kfahim2280@gmail.com',
      to: 'iftekharasef18@gmail.com',
      subject: mydata.subject,
      text: mydata.text,
    });
  }
}
