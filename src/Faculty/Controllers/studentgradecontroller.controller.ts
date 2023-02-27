import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { StudentgradeDTO } from '../DTOs/studentgradeDto.dto';
import { StudentGradeService } from '../Services/studentgradeservice.service';

@Controller('/studentgrade')
export class StudentGradeController {
  constructor(private readonly studentGradeService: StudentGradeService) {}

  @Get('/getstudentgrade')
  getStudentGrade(): any {
    return this.studentGradeService.getStudentGrade();
  }

  @Post('/insertstudentgrade')
  insertStudentGrade(@Body() studentgradedto: StudentgradeDTO): any {
    return this.studentGradeService.insertStudentGrade(studentgradedto);
  }

  @Put('/updatestudentgrade/:id')
  updateStudentGrade(
    @Body() studentgradedto,
    @Param('id', ParseIntPipe) id,
  ): any {
    return this.studentGradeService.updateStudentGrade(studentgradedto, id);
  }

  @Delete('deletestudentgrade/:id')
  deleteStudentGrade(@Param('id', ParseIntPipe) id): any {
    return this.studentGradeService.deleteStudentGrade(id);
  }
}
