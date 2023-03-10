import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AssignmentDto } from '../DTOs/assignmentDto.dto';
import { AssignmentInfo } from '../Entitys/assignemntInfo.entity';

@Injectable()
export class AssignmentService {
  constructor(
    @InjectRepository(AssignmentInfo)
    private AssignmentRepo: Repository<AssignmentInfo>,
  ) {}

  getAssignment(): any {
    return this.AssignmentRepo.find();
  }

  insertAssignment(assignmentdto: AssignmentDto): any {
    const assignment = new AssignmentInfo();
    assignment.courseId = assignmentdto.courseId;
    assignment.subject = assignmentdto.subject;
    assignment.Details = assignmentdto.Details;
    return this.AssignmentRepo.save(assignment);
  }

  updateAssignment(assignmentdto, id): any {
    return this.AssignmentRepo.update(id, assignmentdto);
  }

  updateAssignmentById(assignmentdto, id): any {
    return this.AssignmentRepo.update(id, assignmentdto);
  }

  deleteAssignment(id): any {
    return this.AssignmentRepo.delete(id);
  }
}
