import { BadRequestException, Body,Controller,Delete,Get,Param,ParseIntPipe,Post,Put,Query,UseFilters,UseGuards,UsePipes,ValidationPipe } from "@nestjs/common";
import { DropForm } from "../DTOs/dropform.dto";
import { DropService } from "../Services/drop.service";
import { HttpExceptionFilter } from "../custom.exception.filter";
import { SessionGuard } from "../session.guard";

@Controller("/drop")
export class DropController 
{
    constructor(private dropService: DropService ){}

    @Get("/index")
    // @UseGuards(SessionGuard)
    @UseFilters(new HttpExceptionFilter())
    getIndex():any {
      try {
        return this.dropService.getIndex();
    } catch (e) {
      throw new BadRequestException(e.message);
    }
  }

    @Post("/insertdrop")
    // @UseGuards(SessionGuard)
    @UseFilters(new HttpExceptionFilter())
    @UsePipes(new ValidationPipe())
      insertDrop(@Body() mydto:DropForm): any {
        try {
      return this.dropService.insertDrop(mydto);
    } catch (e) {
      throw new BadRequestException(e.message);
        }
    }
    @Delete("/deletedrop/:id")
    // @UseGuards(SessionGuard)
    @UseFilters(new HttpExceptionFilter())
    deleteDrop( 
      @Param("id") id:number
       ): any {
        try {
     return this.dropService.deleteDrop(id);
    } catch (e) {
      throw new BadRequestException(e.message);
        }
     }
    
  }
