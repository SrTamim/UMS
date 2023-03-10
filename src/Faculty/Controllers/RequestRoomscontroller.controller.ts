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

    @Get('/getrequestroom')
    getRequestRoom(): any {
        return this.requestRoomService.getRequestRoom();
    }

    @Post('/insertrequestroom')
    @UsePipes(new ValidationPipe())
    insertRequestRoom(@Body() requestRoomDto: RequestRoom): any {
        return this.requestRoomService.insertRequestRoom(requestRoomDto);
    }

    @Put('/updaterequestroom/:id')
    @UsePipes(new ValidationPipe())
    updateRequestRoom(@Body() requestRoomDto, @Param('id', ParseIntPipe) id): any {
        return this.requestRoomService.updateRequestRoom(requestRoomDto, id);
    }

    @Delete('deleterequestroom/:id')
    @UsePipes(new ValidationPipe())
    deleteRequestRoom(@Param('id', ParseIntPipe) id): any {
        return this.requestRoomService.deleteRequestRoom(id);
    }
 }