import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm/repository/Repository';
import { FacultyInfoDTO } from '../DTOs/facultyInfo.dto';
import { FacultyInfo } from '../Entitys/facultyInfo.entity';

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
    return this.facultyRepo.save(faculty);
  }

  getAllFaculty(): any {
    return this.facultyRepo.find();
  }

  getFacultyById(id): any {
    return this.facultyRepo.findOneBy(id);
  }

  updateFaculty(facultydto, id): any {
    return this.facultyRepo.update(id, facultydto);
  }

  deleteFaculty(id): any {
    return this.facultyRepo.delete(id);
  }
}
