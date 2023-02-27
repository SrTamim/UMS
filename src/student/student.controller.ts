import { Body,Controller,Delete,Get,Param,ParseIntPipe,Post,Put,Query,UsePipes,ValidationPipe } from "@nestjs/common";
import { LoginStudentForm, StudentForm,  UpdateStudentform } from "./studentform.dto";
import { StudentService } from "./student.service";

@Controller("/student")
export class StudentController
{ 
  constructor(private studentService: StudentService){}

  @Get("/index")
    getAdmin(): any { 
        return this.studentService.getIndex();
    }
    @Get("/findcourse/:id")
      getCourseByID(@Param('id', ParseIntPipe) id: number): any {
      return this.studentService.getCourseByID(id);
    }

    @Get("/findcourse")
      getUserByIDName(@Query() qry:any): any {
      return this.studentService.getCourseByIDName(qry);
    }  
    
    @Post("/insertstudent")
    @UsePipes(new ValidationPipe())
      insertStudent(@Body() mydto:StudentForm): any {
      return this.studentService.insertStudent(mydto);
    }
  

    @Put("/updatestudent/:id")
    @UsePipes(new ValidationPipe())
      updateStudentbyid( 
      @Body() mydto:UpdateStudentform, 
      @Param('id', ParseIntPipe) id: number
      ): any {
    return this.studentService.updateStudentbyid(mydto,id);
    }

    @Delete("/deletecourse/:id")
     deleteCoursebyid( 
     @Param("id") id:number
      ): any {
    return this.studentService.deleteCoursebyid(id);
    }

    @Get("/notice")
    getNoticeByFacultyId(@Query() qry:any): any {
      return this.studentService.getNoticeByFacultyId(qry);
    } 

    @Get("/grade/:id")
    getGrade(@Query() id:any): any {
      return this.studentService.getGrade(id);
    } 

    @Get("/gradebysemester")
    getGradeBySemester(@Query() qry:any): any {
      return this.studentService.getGradeBySemester(qry);
    } 

    @Post("/facultyfeedback")
    @UsePipes(new ValidationPipe())
    facultyFeedback(@Body() mydto:StudentForm): any {
      return this.studentService.facultyFeedback(mydto);
    }
    @Get("/paymentdetails")
    getPaymentDetails(@Query() qry:any): any {
      return this.studentService.getPaymentDetails(qry);
    } 

    @Post("/loginstudent")
    @UsePipes(new ValidationPipe())
    loginStudent(@Body() mydto:LoginStudentForm): any {
      return this.studentService.loginStudent(mydto);
    }
}