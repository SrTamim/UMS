import { Body,Controller,Delete,Get,Param,ParseIntPipe,Post,Put,Query,UsePipes,ValidationPipe } from "@nestjs/common";
import { facfeedbackform } from "../DTOs/facfeedbackform.dto";
import { FacfeedbackService } from "../Services/facfeedback.service";

@Controller("/facfeedback")
export class FacfeedbackController 
{
    constructor(private facfeedbackService: FacfeedbackService){}

    @Get("/index")
    getIndex():any {
        return this.facfeedbackService.getIndex();
    }

    @Post("/inserfeedback")
    @UsePipes(new ValidationPipe())
      insertFacfeedback(@Body() mydto:facfeedbackform): any {
      return this.facfeedbackService.insertFacfeedback(mydto);
    }

    

} 
