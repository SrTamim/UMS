import { BadRequestException, Body,Controller,Delete,Get,Param,ParseIntPipe,Post,Put,Query,UseFilters,UsePipes,ValidationPipe } from "@nestjs/common";
import { DropForm } from "../DTOs/dropform.dto";
import { DropService } from "../Services/drop.service";
import { HttpExceptionFilter } from "../custom.exception.filter";

@Controller("/drop")
export class DropController 
{
    constructor(private dropService: DropService ){}

    @Get("/index")
    @UseFilters(new HttpExceptionFilter())
    getIndex():any {
      try {
        return this.dropService.getIndex();
    } catch (e) {
      throw new BadRequestException(e.message);
    }
  }

    @Post("/insertdrop")
    @UseFilters(new HttpExceptionFilter())
    @UsePipes(new ValidationPipe())
      insertDrop(@Body() mydto:DropForm): any {
        try {
      return this.dropService.insertDrop(mydto);
    } catch (e) {
      throw new BadRequestException(e.message);
        }
    }
  }
