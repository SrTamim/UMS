import { Injectable } from "@nestjs/common/decorators/core/injectable.decorator";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { RequestRoom } from "../Entitys/requestRoom.entity";



@Injectable()
export class RequestRoomService {
    constructor(
        @InjectRepository(RequestRoom)
        private requestRoomRepo: Repository<RequestRoom>,
    ) { }

    getRequestRoom(): any {
        return this.requestRoomRepo.find();
    }

    insertRequestRoom(requestRoomDto: RequestRoom): any {
        const requestRoom = new RequestRoom();
        requestRoom.Fid = requestRoomDto.Fid;
        requestRoom.room = requestRoomDto.room;
        requestRoom.reason = requestRoomDto.reason;
        requestRoom.date = requestRoomDto.date;
        requestRoom.time = requestRoomDto.time;
        return this.requestRoomRepo.save(requestRoom);
    }

    updateRequestRoom(requestRoomDto, id): any {
        return this.requestRoomRepo.update(id, requestRoomDto);
    }

    updateRequestRoomById(requestRoomDto, id): any {
        return this.requestRoomRepo.update(id, requestRoomDto);
    }

    deleteRequestRoom(id): any {
        return this.requestRoomRepo.delete(id);
    }
    
}