import { Injectable } from "@nestjs/common";
import { facfeedbackform } from "../DTOs/facfeedbackform.dto"; 
import { FacfeedbackEntity } from "../Entities/facfeedback.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class FacfeedbackService {
  constructor(
    @InjectRepository(FacfeedbackEntity)
    private studentRepository: Repository<FacfeedbackEntity>
  ) {}

getIndex():any { 
    return this.studentRepository.find();
}

insertFacfeedback(mydto:facfeedbackform):any {
    
      const ffdbck = new FacfeedbackEntity();
        ffdbck.feedback = mydto.feedback;
      return this.studentRepository.save(ffdbck);

    }
    getFeedbackById(id):any {
      return this.studentRepository.find(id);
    }
}