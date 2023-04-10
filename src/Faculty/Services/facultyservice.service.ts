import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm/repository/Repository';
import { FacultyInfoDTO } from '../DTOs/facultyInfo.dto';
import { FacultyInfo } from '../Entitys/facultyInfo.entity';
import { FacultyNotice } from '../Entitys/facultyNotice.entity';

@Injectable()
export class FacultyService {
  constructor(
    @InjectRepository(FacultyInfo)
    private facultyRepo: Repository<FacultyInfo>,
  ) {}

  getIndex(): string {
    return 'Fahim';
  }

  insertFaculty(facultydto: FacultyInfoDTO): any {
    const faculty = new FacultyInfo();
    faculty.Fname = facultydto.Fname;
    faculty.Fidd = facultydto.Fidd;
    faculty.Fdep = facultydto.Fdep;
    faculty.Fprogram = facultydto.Fprogram;
    faculty.Faddress = facultydto.Faddress;
    faculty.Fnum = facultydto.Fnum;
    faculty.dob = facultydto.dob;
    faculty.Fsal = facultydto.Fsal;

    // for (let notice of facultydto.facultyNotices) {
    //   const facultyNotice = new FacultyNotice();
    //   facultyNotice.subject = notice.subject;
    //   facultyNotice.Details = notice.Details;
    //   faculty.facultyNotices.push(facultyNotice);
    // }

    for(let i=0; i<facultydto?.facultyNotices.length; i++){
      const facultyNotice = new FacultyNotice();
      //facultyNotice.subject = facultydto?.facultyNotices[i].subject;
      //facultyNotice.Details = facultydto?.facultyNotices[i].Details;
      faculty.facultyNotices.push(facultyNotice);
    }

    return this.facultyRepo.save(faculty);
  }

  getAllFaculty(): any {
    return this.facultyRepo.find(
      { relations: { facultyNotices: true } }
    );
  }

  getNoticesByFacultyID(id): any { 
    return this.facultyRepo.find({
      where: { Fid: id },
      relations: { facultyNotices : true },   
    });
  }

  getFacultyById(id): any {
    return this.facultyRepo.findOneBy({ Fid: id });
  }

  updateFaculty(facultydto, id): any {
    return this.facultyRepo.update(id, facultydto);
  }

  deleteFaculty(id): any {
    return this.facultyRepo.delete(id);
  }
}
