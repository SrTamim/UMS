import { Body,Controller,Delete,Get,Param,ParseIntPipe,Post,Put,Query,UsePipes,ValidationPipe } from "@nestjs/common";
import { GradeForm } from "../DTOs/gradeform.dto";
import { GradeService } from "../Services/grade.service";

@Controller("/grade")
export class GradeController 
{
    constructor(private gradeService: GradeService){}

    @Get("/index")
    getIndex():any {
        return this.gradeService.getIndex();
    }

    @Post("/insertgrade")
    @UsePipes(new ValidationPipe())
      insertGrade(@Body() mydto:GradeForm): any {
      return this.gradeService.insertGrade(mydto);
    }

    
   
    
}
