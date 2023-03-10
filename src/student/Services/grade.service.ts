import { Injectable } from "@nestjs/common";
import { GradeForm} from "../DTOs/gradeform.dto";
import { GradeEntity } from "../Entities/grade.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class GradeService {
  constructor(
    @InjectRepository(GradeEntity)
    private studentRepository: Repository<GradeEntity>
  ) {}

getIndex():any { 
    return this.studentRepository.find();
}

insertGrade(mydto:GradeForm):any {
    
      const grade = new GradeEntity();
        grade.year = mydto.year;
        grade.xm = mydto.xm;
        grade.grade = mydto.grade;
      return this.studentRepository.save(grade);

    }
}