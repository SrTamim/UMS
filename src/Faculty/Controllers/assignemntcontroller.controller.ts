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

}
