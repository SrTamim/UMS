import { Controller, Get } from '@nestjs/common';
import { Body, Post } from '@nestjs/common/decorators';
import { FacultyInfoDTO } from '../DTOs/facultyInfo.dto';
import { FacultyService } from '../Services/facultyservice.service';

@Controller('/NewFaculty')
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
}
