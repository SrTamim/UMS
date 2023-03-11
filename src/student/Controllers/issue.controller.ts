import { Body,Controller,Delete,Get,Param,ParseIntPipe,Post,Put,Query,UsePipes,ValidationPipe } from "@nestjs/common";
import { IssueForm } from "../DTOs/issueform.dto";
import { IssueService } from "../Services/issue.service";
@Controller("/issue")
export class IssueController 
{
    constructor(private issueService: IssueService){}
    @Get("/index")
    getIndex():any {
        return this.issueService.getIndex();
    }
    @Post("/insertissue")
    @UsePipes(new ValidationPipe())
      insertIssue(@Body() mydto:IssueForm): any {
      return this.issueService.insertIssue(mydto);
    }
    }
    

