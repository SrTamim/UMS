import { BadRequestException, Body,Controller,Delete,Get,Param,ParseIntPipe,Post,Put,Query,UseFilters,UseGuards,UsePipes,ValidationPipe } from "@nestjs/common";
import { GradeForm } from "../DTOs/gradeform.dto";
import { GradeService } from "../Services/grade.service";
import { HttpExceptionFilter } from "../custom.exception.filter";
import { SessionGuard } from "../session.guard";

@Controller("/grade")
export class GradeController 
{
    constructor(private gradeService: GradeService){}

    @Get("/index")
    // @UseGuards(SessionGuard)
    @UseFilters(new HttpExceptionFilter())
    getIndex():any {
      try {
        return this.gradeService.getIndex();
    } catch (e) {
      throw new BadRequestException(e.message);
    }
  }

    @Post("/insertgrade")
    // @UseGuards(SessionGuard)
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
