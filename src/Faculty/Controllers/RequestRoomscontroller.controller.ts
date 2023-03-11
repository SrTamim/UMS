import {
  Controller,Body,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { RequestRoom } from "../Entitys/requestRoom.entity";
import { RequestRoomService } from "../Services/RequestRoomservice.service";

@Controller('/requestroom')
export class RequestRoomController {
    constructor(private readonly requestRoomService: RequestRoomService) { }

    
 }