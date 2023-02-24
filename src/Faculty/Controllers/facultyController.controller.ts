import { Controller, Get, Body, Post, Param } from '@nestjs/common';
import { FacultyInfoDTO } from '../DTOs/facultyInfo.dto';
import { FacultyService } from '../Services/facultyservice.service';

@Controller('/faculty')
export class FacultyController {
  constructor(private readonly facultyService: FacultyService) {}

  @Get('/index')
  getFaculty(): any {
    return this.facultyService.getIndex();
  }

  @Post('/insert')
  insertFaculty(@Body() facultydto: FacultyInfoDTO): any {
    return this.facultyService.insertFaculty(facultydto);
  }

  @Get('/getall')
  getAllFaculty(): any {
    return this.facultyService.getAllFaculty();
  }
}
