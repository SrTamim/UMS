import { BadRequestException, Body,Controller,Delete,Get,Param,ParseIntPipe,Post,Put,Query,UseFilters,UseGuards,UsePipes,ValidationPipe } from "@nestjs/common";
import { facfeedbackform } from "../DTOs/facfeedbackform.dto";
import { FacfeedbackService } from "../Services/facfeedback.service";
import { HttpExceptionFilter } from "../custom.exception.filter";
import { SessionGuard } from "../session.guard";

@Controller("/facfeedback")
export class FacfeedbackController 
{
    constructor(private facfeedbackService: FacfeedbackService){}

    @Get("/index")
    @UseGuards(SessionGuard)
    @UseFilters(new HttpExceptionFilter())
    getIndex():any {
      try {
        return this.facfeedbackService.getIndex();
    } catch (e) {
      throw new BadRequestException(e.message);
    }
  }

    @Post("/inserfeedback")
    @UseGuards(SessionGuard)
    @UseFilters(new HttpExceptionFilter())
    @UsePipes(new ValidationPipe())
      insertFacfeedback(@Body() mydto:facfeedbackform): any {
        try {
      return this.facfeedbackService.insertFacfeedback(mydto);
    } catch (e) {
      throw new BadRequestException(e.message);
        }
  }


    

} 
