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
    faculty.universityId = facultydto.universityId;
    faculty.password = facultydto.password;
    faculty.Email = facultydto.Email;
    faculty.photo = facultydto.photo;
    faculty.PhoneNumber = facultydto.PhoneNumber;
    faculty.department = facultydto.department;
    faculty.Sex = facultydto.Sex;
    faculty.MaritalStatus = facultydto.MaritalStatus;
    faculty.BloodGroup = facultydto.BloodGroup;
    faculty.PermanentAddress = facultydto.PermanentAddress;
    faculty.DOB = facultydto.DOB;
    faculty.BSC = facultydto.BSC;
    faculty.MSC = facultydto.MSC;
    faculty.SSC = facultydto.SSC;
    faculty.HSC = facultydto.HSC;
    return this.facultyRepo.save(faculty);
  }

  getAllFaculty(): any {
    return this.facultyRepo.find();
  }
}
