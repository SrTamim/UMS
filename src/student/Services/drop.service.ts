import { Injectable } from "@nestjs/common";
import { DropForm } from "../DTOs/dropform.dto";
import { DropEntity } from "../Entities/drop.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class DropService {
  constructor(
    @InjectRepository(DropEntity)
    private studentRepository: Repository<DropEntity>
  ) {}

getIndex():any { 
    return this.studentRepository.find();
}

insertDrop(mydto:DropForm):any {
    
      const drop = new DropEntity();
        drop.applicationStatus = "pending";
        drop.reason = mydto.reason;
      return this.studentRepository.save(drop);

    }

deleteDrop(id):any {
    return this.studentRepository.delete(id);        
}
}