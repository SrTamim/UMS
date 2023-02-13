import { Injectable } from '@nestjs/common';
import { FacultyDto, LoginDto } from './facultydto.dto';

@Injectable()
export class FacultyService {
  getIndex(): string {
    return 'Admin Index';
  }
  getUserByID(id): any {
    return 'the id is ' + id;
  }

  getUserByIDName(qry): any {
    return 'the id is ' + qry.id + ' and name is ' + qry.name;
  }

  insertUser(mydto: FacultyDto): any {
    return (
      'Faculty Inserted name: ' +
      mydto.name +
      ' and id is ' +
      mydto.universityId +
      ' and Uname is ' +
      mydto.Uname
    );
  }

  updateUser(Uname, universityId): any {
    return 'Faculty updated name: ' + Uname + ' and id is ' + universityId;
  }

  updateUserbyid(Uname, universityId): any {
    return (
      'Faculty admin where id ' + universityId + ' and change name to ' + Uname
    );
  }

  deleteUserbyid(universityId): any {
    return 'Delete id is ' + universityId;
  }

  getStudentByID(qry): any {
    return 'the id is ' + qry.id;
  }

  insertCourse(): any {
    return 'Course Inserted';
  }

  insertGrades(): any {
    return 'Grades Inserted';
  }

  updateGrades(name, universityId): any {
    return 'Grades Updated by name' + name + 'and id' + universityId;
  }

  updateGradesbyid(name, universityId): any {
    return 'Grades Updated by id  ' + universityId + 'and name' + name;
  }

  deleteGradesbyid(universityId): any {
    return 'Grades Deleted by id ' + universityId;
  }

  login(mydto: LoginDto): any {
    return 'Login by ' + mydto.email + ' and password is ' + mydto.password;
  }
}
