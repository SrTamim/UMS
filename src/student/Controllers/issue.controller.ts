import { BadRequestException, Body,Controller,Delete,Get,Param,ParseIntPipe,Post,Put,Query,UseFilters,UseGuards,UsePipes,ValidationPipe } from "@nestjs/common";
import { IssueForm, UpdateIssueForm } from "../DTOs/issueform.dto";
import { IssueService } from "../Services/issue.service";
import { HttpExceptionFilter } from "../custom.exception.filter";
import { SessionGuard } from "../session.guard";

@Controller("/issue")
export class IssueController 
{
    constructor(private issueService: IssueService){}
    @Get("/index")
    // @UseGuards(SessionGuard)
    @UseFilters(new HttpExceptionFilter())
    getIndex():any {
      try {
        return this.issueService.getIndex();
    } catch (e) {
      throw new BadRequestException(e.message);
    }
    }
    @Post("/insertissue")
    // @UseGuards(SessionGuard)
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
    // @UseGuards(SessionGuard)
    sendEmail(@Body() mydata){
    return this.issueService.sendEmail(mydata);
    }

    @Get("/issuebyid/:id")
    getIssueById(@Param('id', ParseIntPipe) id: number): any {
    return this.issueService.getIssueById(id);
  }

  @Get("getissue/:id")
  // @UseGuards(SessionGuard)
  getStudentByIssueID(@Param('id', ParseIntPipe) id: number): any {
    return this.issueService.getStudentByIssueID(id);
  }
  
  @Delete("/deleteissue/:id")
  // @UseGuards(SessionGuard)
  @UseFilters(new HttpExceptionFilter())
  deleteDrop( 
    @Param("id") id:number
     ): any {
      try {
   return this.issueService.deleteIssue(id);
  } catch (e) {
    throw new BadRequestException(e.message);
      }
   }
   
  @Put('/updateissue/')
  @UseFilters(new HttpExceptionFilter())
  @UsePipes(new ValidationPipe())
  updateIssue(
    @Body('Isid',ParseIntPipe) Isid:number,
    @Body('issueType') issueType:string,
    @Body('issue') issue:string,
  ): any {
      return this.issueService.updateIssue(Isid, issueType,issue);
    }

//    @Put("/updateissue/:id")
//    // @UseGuards(SessionGuard)
//    @UseFilters(new HttpExceptionFilter())
//    @UsePipes(new ValidationPipe())
//      updateIssue( 
//      @Body() mydto:UpdateIssueForm, 
//      @Param('id', ParseIntPipe) id: number
//      ): any {
//        try{
//    return this.issueService.updateIssue(mydto,id);
//    } catch(e){
//      throw new BadRequestException(e.message);
//    }
//  }

}

  
  
    

