import { Injectable } from "@nestjs/common";
import { StudentForm } from "./studentform.dto";



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
    
        return "Admin Inserted name: " + mydto.name+" and id is " + mydto.id;
    }

updateStudent(name,id):any {
        return "Admin updated name: " +name+" and id is " +id;
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
    
  return "the paymentdetails is : ";
}
}