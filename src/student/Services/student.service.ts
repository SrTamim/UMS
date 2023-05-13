import { Injectable } from "@nestjs/common";
import { StudentForm, UpdateStudentform} from "../DTOs/studentform.dto";
import { StudentEntity } from "../Entities/student.entity";
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
      student.Sname = mydto.Sname;
      student.Sdep = mydto.Sdep;
      student.Sidd = mydto.Sidd;
      student.Saddress = mydto.Saddress;
      student.Snum = mydto.Snum;
      student.Sdob = mydto.Sdob;
      student.Sprogram = mydto.Sprogram;
      return this.studentRepository.save(student);

    }


updateStudentbyid(mydto:UpdateStudentform,id):any {
        return this.studentRepository.update(id,mydto);
    }
    updateStudent(Sid,Saddress,Snum):any{
      return this.studentRepository.update(Sid,{Saddress:Saddress,Snum:Snum});
    }
  deleteCoursebyid(id):any {
    
        return "Delete id is "+id;
    }
    getNoticeByFacultyId(qry):any {
    
      return "the id is "+qry.id +" and notice is "+qry.name;
  }
    
  getGrade(id):any {

    const student=this.studentRepository.find(id);
     return "the grade is : " +student;
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

getIssuesByStudentID(id):any {
  return this.studentRepository.find({ 
          where: {Sid:id},
          relations: {
          issues: true,
      },
   });
}

async getstudent(id) {
  const data=await this.studentRepository.find({where:{Sid: id} });
  console.log(data);
  if(data!==null) {
      return data;
  }
 else 
 {
     return "No data found"; }


}
}