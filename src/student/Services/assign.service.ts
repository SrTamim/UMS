import { Injectable } from "@nestjs/common";
import { AssignForm } from "../DTOs/assignform.dto";
import { AssignEntity } from "../Entities/assign.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class AssignService {
  constructor(
    @InjectRepository(AssignEntity)
    private studentRepository: Repository<AssignEntity>
  ) {}

getIndex():any { 
    return this.studentRepository.find();
}

uploadAssign(mydto:AssignForm):any {
    
      const assign = new AssignEntity();
      assign.assignmentName = mydto.assignmentName;
      assign.filename = mydto.filename;
      return this.studentRepository.save(assign);

    }
}