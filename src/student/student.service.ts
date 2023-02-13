import { Injectable } from "@nestjs/common";
import { LoginStudentForm, StudentForm, UpdateStudentform} from "./studentform.dto";

@Injectable()
export class StudentService {

getIndex():string { 
    return "Student Index"; 
}
getCourseByID(id):any {
    
    return "the id is "+id;
}

getCourseByIDName(qry):any {
    
    return "the id is "+qry.id +" and name is "+qry.name;
}

insertStudent(mydto:StudentForm):any {
    
        return "Inserted name: " + mydto.name+
        ", id is " + mydto.id+
        ", address is " + mydto.address+
        ", phone is " + mydto.phone+
        ", cgpa is " + mydto.CGPA+
        ", semester is " + mydto.semester+
        ", department is " + mydto.department+
        ", faculty is " + mydto.faculty+
        ", course is " + mydto.course+
        ", section is " + mydto.section+
        ", studentID is " + mydto.studentId+
        ", facultyFeedback is " + mydto.facultyFeedback;
    }

updateStudent(mydto:UpdateStudentform):any {
        return "updated name: " +" and id is " ;
    }
updateStudentbyid(name,id):any {
        return "Update admin where id " +id+" and change name to " +name;
    }
  deleteCoursebyid(id):any {
    
        return "Delete id is "+id;
    }
    getNoticeByFacultyId(qry):any {
    
      return "the id is "+qry.id +" and notice is "+qry.name;
  }
    
  getGrade(qry):any {
    
    return "the grade is : "+qry.name;
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