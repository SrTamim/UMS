import { Injectable } from "@nestjs/common";
import { LoginStudentForm, StudentForm, UpdateStudentform} from "./studentform.dto";
import { StudentEntity } from "./student.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(StudentEntity)
    private studentRepository: Repository<StudentEntity>
  ) {}

getIndex():any { 
    return this.studentRepository.find();
}
getCourseByID(id):any {
    
    return "the id is "+id;
}

getCourseByIDName(qry):any {
    
    return "the id is "+qry.id +" and name is "+qry.name;
}

insertStudent(mydto:StudentForm):any {
    
      const student = new StudentEntity();
      student.name = mydto.name;
      student.CGPA = mydto.CGPA;
      student.semester = mydto.semester;
      student.department = mydto.department;
      student.studentId = mydto.studentId;
      student.address = mydto.address;
      student.phone = mydto.phone;
      return this.studentRepository.save(student);

    }


updateStudentbyid(mydto:UpdateStudentform,id):any {
        return this.studentRepository.update(id,mydto);
    }
  deleteCoursebyid(id):any {
    
        return "Delete id is "+id;
    }
    getNoticeByFacultyId(qry):any {
    
      return "the id is "+qry.id +" and notice is "+qry.name;
  }
    
  getGrade(mydto,id):any {

    const student=this.studentRepository.find(id);
     return "the grade is : " +mydto.CGPA;
}
getGradeBySemester(id):any {
    
  return "the grade is : "+id;
}
facultyFeedback(mydto:StudentForm):any {
    
  return "Student Inserted feedback: " ;
}
getPaymentDetails(qry):any {
    
  return "the paymentdetails for id : "+qry.id+" name:"+qry.name;
}

loginStudent(mydto:LoginStudentForm):any {
  return  " email is " + mydto.email+
  " password is " + mydto.password;
}
}