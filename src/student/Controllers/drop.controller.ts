import { Body,Controller,Delete,Get,Param,ParseIntPipe,Post,Put,Query,UsePipes,ValidationPipe } from "@nestjs/common";
import { DropForm } from "../DTOs/dropform.dto";
import { DropService } from "../Services/drop.service";

@Controller("/drop")
export class DropController 
{
    constructor(private dropService: DropService ){}

    @Get("/index")
    getIndex():any {
        return this.dropService.getIndex();
    }

    @Post("/insertdrop")
    @UsePipes(new ValidationPipe())
      insertDrop(@Body() mydto:DropForm): any {
      return this.dropService.insertDrop(mydto);
    }    
  }
