import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Query, Req, Request, UsePipes, ValidationPipe } from "@nestjs/common";
import { StudentForm } from "./studentform.dto";
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
    getCourseID(@Param("id", ParseIntPipe) id:number,): any {
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
  
    @Put("/updatestudent/")
    @UsePipes(new ValidationPipe())
    updateStudent( 
      @Body("name") name:string, 
      @Body("id") id:number
      ): any {
    return this.studentService.updateStudent(name, id);
    }
    
    @Put("/updatestudent/:id")
  updateStudentbyid( 
      @Body("name") name:string, 
      @Param("id", ParseIntPipe) id:number
      ): any {
    return this.studentService.updateStudentbyid(name,id);
    }

    @Delete("/deletecourse/:id")
  deleteCoursebyid( 
     @Param("id", ParseIntPipe) id:number
      ): any {
    return this.studentService.deleteCoursebyid(id);
    }
    @Get("/notice")
    getNoticeByFacultyId(@Query() qry:any): any {
      return this.studentService.getNoticeByFacultyId(qry);
    } 

  @Get("/grade")
    getGrade(@Query() qry:any): any {
      return this.studentService.getGrade(qry);
    } 
  @Get("/gradebysemester")
    getGradeBySemester(@Query() qry:any): any {
      return this.studentService.getGradeBySemester(qry);
    } 
    @Post("/facultyfeedback")
    facultyFeedback(@Body() mydto:StudentForm): any {
      return this.studentService.facultyFeedback(mydto);
    }
    @Get("/paymentdetails")
    getPaymentDetails(@Query() qry:any): any {
      return this.studentService.getPaymentDetails(qry);
    } 


}