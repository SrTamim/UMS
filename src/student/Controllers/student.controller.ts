import { UseGuards,BadRequestException, Body,Controller,Delete,Get,Param,ParseIntPipe,Post,Put,Query,UseFilters,UsePipes,ValidationPipe } from "@nestjs/common";
import { StudentForm,  UpdateStudentform } from "../DTOs/studentform.dto";
import { StudentService } from "../Services/student.service";
import { HttpExceptionFilter } from "../custom.exception.filter";
import { SessionGuard } from "../session.guard";

@Controller("/student")
export class StudentController
{ 
  constructor(private studentService: StudentService){}

  @Get("/index")
  @UseFilters(new HttpExceptionFilter())
    getAdmin(): any { 
      try{
        return this.studentService.getIndex();
      }catch(e){
        throw new BadRequestException(e.message);
      }
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
    @UseGuards(SessionGuard)
    @UseFilters(new HttpExceptionFilter())
    @UsePipes(new ValidationPipe())
      insertStudent(@Body() mydto:StudentForm): any {
        try{
      return this.studentService.insertStudent(mydto);
        }catch(e){
          throw new BadRequestException(e.message);
        }
    }
  

    @Put("/updatestudent/:id")
    @UseGuards(SessionGuard)
    @UseFilters(new HttpExceptionFilter())
    @UsePipes(new ValidationPipe())
      updateStudentbyid( 
      @Body() mydto:UpdateStudentform, 
      @Param('id', ParseIntPipe) id: number
      ): any {
        try{
    return this.studentService.updateStudentbyid(mydto,id);
    } catch(e){
      throw new BadRequestException(e.message);
    }
  }

    @Delete("/deletecourse/:id")
     deleteCoursebyid( 
     @Param("id") id:number
      ): any {
    return this.studentService.deleteCoursebyid(id);
    }

    @Get("/notice")
    @UseGuards(SessionGuard)
    getNoticeByFacultyId(@Query() qry:any): any {
      return this.studentService.getNoticeByFacultyId(qry);
    } 

    @Get("/grade/:id")
    @UseGuards(SessionGuard)
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

   
}