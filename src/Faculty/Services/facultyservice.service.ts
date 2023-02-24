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
    faculty.name = facultydto.name;
    /*
      faculty.universityId = facultydto.universityId;
      faculty.password = facultydto.password;
      faculty.Email = facultydto.Email;
      faculty.photo = facultydto.photo;
      faculty.PhoneNumber = facultydto.PhoneNumber;

      faculty.department = facultydto.department;
      */
    return this.facultyRepo.save(faculty);
  }
}
