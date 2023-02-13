import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
  Req,
  Request,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';

import { FacultyService } from './faculty.service';
import { FacultyDto, LoginDto } from './facultydto.dto';

@Controller('/faculty')
export class FacultyController {
  constructor(private readonly facultyService: FacultyService) {}
  @Get('/index')
  getFaculty(): any {
    return this.facultyService.getIndex();
  }

  @Get('/finduser/:id')
  getUserByID(@Param('id', ParseIntPipe) id: number): any {
    return this.facultyService.getUserByID(id);
  }

  @Get('/finduser')
  getUserByIDName(@Query() qry: any): any {
    return this.facultyService.getUserByIDName(qry);
  }

  @Post('/insertuser')
  @UsePipes(new ValidationPipe())
  insertUser(@Body() mydto: FacultyDto): any {
    return this.facultyService.insertUser(mydto);
  }

  @Put('/updateuser/')
  @UsePipes(new ValidationPipe())
  updateUser(
    @Body('Uname') Uname: string,
    @Body('universityId') universityId: number,
  ): any {
    return this.facultyService.updateUser(Uname, universityId);
  }

  @Put('/updateuser/:id')
  updateUserbyid(
    @Body('Uname') Uname: string,
    @Param('id', ParseIntPipe) universityId: number,
  ): any {
    return this.facultyService.updateUserbyid(Uname, universityId);
  }

  @Delete('/deleteuser/:id')
  deleteUserbyid(
    @Param('universityId', ParseIntPipe) universityId: number,
  ): any {
    return this.facultyService.deleteUserbyid(universityId);
  }

  @Get('/student/:id')
  getStudentByID(@Query() qry: any): any {
    return this.facultyService.getStudentByID(qry);
  }

  @Post('/course')
  @UsePipes(new ValidationPipe())
  insertCourse(@Body() mydto: FacultyDto): any {
    return this.facultyService.insertCourse();
  }

  @Post('/insertgrades')
  @UsePipes(new ValidationPipe())
  insertGrades(@Body() mydto: FacultyDto): any {
    return this.facultyService.insertGrades();
  }

  @Put('/updategrades/')
  @UsePipes(new ValidationPipe())
  updateGrades(
    @Body('Uname') Uname: string,
    @Body('universityId') universityId: number,
  ): any {
    return this.facultyService.updateGrades(Uname, universityId);
  }

  @Put('/updategrades/:id')
  updateGradesbyid(
    @Body('Uname') Uname: string,
    @Param('id', ParseIntPipe) universityId: number,
  ): any {
    return this.facultyService.updateGradesbyid(Uname, universityId);
  }

  @Delete('/deletegrades/:id')
  deleteGradesbyid(
    @Param('universityId', ParseIntPipe) universityId: number,
  ): any {
    return this.facultyService.deleteGradesbyid(universityId);
  }

  @Post('/login')
  @UsePipes(new ValidationPipe())
  login(@Body() mydto: LoginDto): any {
    return this.facultyService.login(mydto);
  }
}
