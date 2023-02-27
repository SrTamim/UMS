import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AssignmentDto } from '../DTOs/assignmentDto.dto';
import { AssignmentService } from '../Services/assignmentservice.service';

@Controller('/assignment')
export class AssignmentController {
  constructor(private readonly assignmentService: AssignmentService) {}

  @Get('/getassignment')
  getAssignment(): any {
    return this.assignmentService.getAssignment();
  }

  @Post('/insertassignment')
  @UsePipes(new ValidationPipe())
  insertAssignment(@Body() assignmentdto: AssignmentDto): any {
    return this.assignmentService.insertAssignment(assignmentdto);
  }

  @Put('/updateassignment/:id')
  @UsePipes(new ValidationPipe())
  updateAssignment(@Body() assignmentdto, @Param('id', ParseIntPipe) id): any {
    return this.assignmentService.updateAssignment(assignmentdto, id);
  }

  @Delete('deleteassignment/:id')
  @UsePipes(new ValidationPipe())
  deleteAssignment(@Param('id', ParseIntPipe) id): any {
    return this.assignmentService.deleteAssignment(id);
  }
}
