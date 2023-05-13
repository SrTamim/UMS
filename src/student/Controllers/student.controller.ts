import { UseGuards,BadRequestException, Body,Controller,Delete,Get,Param,ParseIntPipe,Post,Put,Query,UseFilters,UsePipes,ValidationPipe } from "@nestjs/common";
import { StudentForm,  UpdateStudentform } from "../DTOs/studentform.dto";
import { StudentService } from "../Services/student.service";
import { HttpExceptionFilter } from "../custom.exception.filter";
import { SessionGuard } from "../session.guard";
import { Response } from 'express';


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
    // @Get("/findcourse/:id")
    //   getCourseByID(@Param('id', ParseIntPipe) id: number): any {
    //   return this.studentService.getCourseByID(id);
    // }

    // @Get("/findcourse")
    //   getUserByIDName(@Query() qry:any): any {
    //   return this.studentService.getCourseByIDName(qry);
    // }  
    
    @Post("/insertstudent")
    // @UseGuards(SessionGuard)
    @UseFilters(new HttpExceptionFilter())
    @UsePipes(new ValidationPipe())
      insertStudent(@Body() mydto:StudentForm): any {
        try{
      return this.studentService.insertStudent(mydto);
        }catch(e){
          throw new BadRequestException(e.message);
        }
    }
  

  //   @Put("/updatestudent/:id")
  //   // @UseGuards(SessionGuard)
  //   @UseFilters(new HttpExceptionFilter())
  //   @UsePipes(new ValidationPipe())
  //     updateStudentbyid( 
  //     @Body() mydto:UpdateStudentform, 
  //     @Param('id', ParseIntPipe) id: number
  //     ): any {
  //       try{
  //   return this.studentService.updateStudentbyid(mydto,id);
  //   } catch(e){
  //     throw new BadRequestException(e.message);
  //   }
  // }
  
  @Put('/updatestudent/')
  @UseFilters(new HttpExceptionFilter())
  @UsePipes(new ValidationPipe())
  updateIssue(
    @Body('Sid',ParseIntPipe) Sid:number,
    @Body('Saddress') Saddress:string,
    @Body('Snum') Snum:string,  
  ): any {
      return this.studentService.updateStudent(Sid,Saddress,Snum );
    }


    // @Delete("/deletecourse/:id")
    //  deleteCoursebyid( 
    //  @Param("id") id:number
    //   ): any {
    // return this.studentService.deleteCoursebyid(id);
    // }


    // @Get("/grade/:id")
    // // @UseGuards(SessionGuard)
    // getGrade(@Query() id:any): any {
    //   return this.studentService.getGrade(id);
    // } 

    // @Get("/gradebysemester")
    // getGradeBySemester(@Query() qry:any): any {
    //   return this.studentService.getGradeBySemester(qry);
    // } 

    // @Get("/paymentdetails")
    // getPaymentDetails(@Query() qry:any): any {
    //   return this.studentService.getPaymentDetails(qry);
    // } 

    @Get("getstudentissue/:id")
    // @UseGuards(SessionGuard)
    getIssuesByStudentID(@Param('id', ParseIntPipe) id: number): any {
      return this.studentService.getIssuesByStudentID(id);
    }

    @Get("getstudent/:id")
    // @UseGuards(SessionGuard)
    getstudent(@Param('id', ParseIntPipe) id: number): any {
      return this.studentService.getstudent(id);
    }


    // @Controller('cookie')
    // export class CookieController {
    
    //   @Get()
    //   setCookie(@Res() res: Response, @Cookie('cookieName') cookieValue: string) {
    //     res.cookie('cookieName', 'cookieValue');
    //     return res.status(HttpStatus.OK).send('Cookie is set');
    //   }
      
    // }
   
}