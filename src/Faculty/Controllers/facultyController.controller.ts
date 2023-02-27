import {
  Controller,
  Get,
  Body,
  Post,
  Param,
  UsePipes,
  ValidationPipe,
  ParseIntPipe,
  Put,
  Delete,
} from '@nestjs/common';
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
  @UsePipes(new ValidationPipe())
  insertFaculty(@Body() facultydto: FacultyInfoDTO): any {
    return this.facultyService.insertFaculty(facultydto);
  }

  @Get('/getall')
  getAllFaculty(): any {
    return this.facultyService.getAllFaculty();
  }

  @Get('/get/:id')
  getFacultyById(@Param('id', ParseIntPipe) id: number): any {
    return this.facultyService.getFacultyById(id);
  }

  @Put('/update/:id')
  @UsePipes(new ValidationPipe())
  updateFaculty(@Body() facultydto, @Param('id', ParseIntPipe) id): any {
    return this.facultyService.updateFaculty(facultydto, id);
  }

  @Delete('/delete/:id')
  @UsePipes(new ValidationPipe())
  deleteFaculty(@Param('id', ParseIntPipe) id): any {
    return this.facultyService.deleteFaculty(id);
  }
}
