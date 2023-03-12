import { BadRequestException, Body,Controller,Delete,Get,Param,ParseIntPipe,Post,Put,Query,UseFilters,UseGuards,UsePipes,ValidationPipe } from "@nestjs/common";
import { IssueForm } from "../DTOs/issueform.dto";
import { IssueService } from "../Services/issue.service";
import { HttpExceptionFilter } from "../custom.exception.filter";
import { SessionGuard } from "../session.guard";

@Controller("/issue")
export class IssueController 
{
    constructor(private issueService: IssueService){}
    @Get("/index")
    @UseGuards(SessionGuard)
    @UseFilters(new HttpExceptionFilter())
    getIndex():any {
      try {
        return this.issueService.getIndex();
    } catch (e) {
      throw new BadRequestException(e.message);
    }
    }
    @Post("/insertissue")
    @UseGuards(SessionGuard)
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
    @UseGuards(SessionGuard)
    sendEmail(@Body() mydata){
    return this.issueService.sendEmail(mydata);
    }

    @Get("/issuebyid/:id")
    getIssueById(@Param('id', ParseIntPipe) id: number): any {
    return this.issueService.getIssueById(id);
  }

    }
    

