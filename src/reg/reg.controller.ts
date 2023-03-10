import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
    Query,
    UsePipes,
    ValidationPipe,
    Session,
    UseGuards
  } from '@nestjs/common';
  import { UnauthorizedException } from '@nestjs/common/exceptions';
  import { RegFrom } from './reg.dto';
  import { RegService } from './reg.service';
  import { SessionGuard } from './session.guard';

  @Controller('/reg')
export class RegController {
  constructor(private regService: RegService) {}


  }