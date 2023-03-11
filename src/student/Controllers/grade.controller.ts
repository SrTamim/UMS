import { BadRequestException, Body,Controller,Delete,Get,Param,ParseIntPipe,Post,Put,Query,UseFilters,UsePipes,ValidationPipe } from "@nestjs/common";
import { GradeForm } from "../DTOs/gradeform.dto";
import { GradeService } from "../Services/grade.service";
import { HttpExceptionFilter } from "../custom.exception.filter";

@Controller("/grade")
export class GradeController 
{
    constructor(private gradeService: GradeService){}

    @Get("/index")
    @UseFilters(new HttpExceptionFilter())
    getIndex():any {
      try {
        return this.gradeService.getIndex();
    } catch (e) {
      throw new BadRequestException(e.message);
    }
  }

    @Post("/insertgrade")
    @UseFilters(new HttpExceptionFilter())
    @UsePipes(new ValidationPipe())
      insertGrade(@Body() mydto:GradeForm): any {
        try {
        return this.gradeService.insertGrade(mydto);
    } catch (e) {
      throw new BadRequestException(e.message);
        }
    }    
  }
