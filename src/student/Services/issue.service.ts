import { Injectable } from "@nestjs/common";
import {IssueForm} from "../DTOs/issueform.dto";
import { IssueEntity } from "../Entities/issue.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { MailerService } from "@nestjs-modules/mailer/dist";


@Injectable()
export class IssueService {
  constructor(
    @InjectRepository(IssueEntity)
    private studentRepository: Repository<IssueEntity>,
    private mailerService: MailerService

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

    async sendEmail(mydata){
      return   await this.mailerService.sendMail({
             from:"iftekharasef18@gmail.com",
             to: "kabirr572@gmail.com",
             subject: mydata.subject,
             text: mydata.text, 
           });
     
     }

}