import { BadRequestException, Body,Controller,Delete,Get,Param,ParseIntPipe,Post,Put,Query,UseFilters,UsePipes,ValidationPipe } from "@nestjs/common";
import { IssueForm } from "../DTOs/issueform.dto";
import { IssueService } from "../Services/issue.service";
import { HttpExceptionFilter } from "../custom.exception.filter";

@Controller("/issue")
export class IssueController 
{
    constructor(private issueService: IssueService){}
    @Get("/index")
    @UseFilters(new HttpExceptionFilter())
    getIndex():any {
      try {
        return this.issueService.getIndex();
    } catch (e) {
      throw new BadRequestException(e.message);
    }
    }
    @Post("/insertissue")
    @UseFilters(new HttpExceptionFilter())
    @UsePipes(new ValidationPipe())
      insertIssue(@Body() mydto:IssueForm): any {
        try {
      return this.issueService.insertIssue(mydto);
    } catch (e) {
      throw new BadRequestException(e.message);
    }
    }

    @Post('/sendemail')
    sendEmail(@Body() mydata){
    return this.issueService.sendEmail(mydata);
    }



    }
    

