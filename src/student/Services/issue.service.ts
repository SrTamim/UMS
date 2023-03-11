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
    
      return this.studentRepository.save(mydto);
}
      getStudentByIssueID(id):any {
        return this.studentRepository.find({ 
                where: {Isid:id},
            relations: {
                student: true,
            },
         });
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