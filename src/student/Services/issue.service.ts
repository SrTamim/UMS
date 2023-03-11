import { Injectable } from "@nestjs/common";
import {IssueForm} from "../DTOs/issueform.dto";
import { IssueEntity } from "../Entities/issue.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class IssueService {
  constructor(
    @InjectRepository(IssueEntity)
    private studentRepository: Repository<IssueEntity>
  ) {}

getIndex():any { 
    return this.studentRepository.find();
}

insertIssue(mydto:IssueForm):any {
    
      const is = new IssueEntity();
        is.issueType = mydto.issueType;
        is.issue = mydto.issue;
      return this.studentRepository.save(is);

    }
}