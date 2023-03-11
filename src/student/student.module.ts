import { Module } from '@nestjs/common';
import { StudentController } from './Controllers/student.controller';
import { GradeController } from './Controllers/grade.controller';
import { StudentService } from './Services/student.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentEntity } from './Entities/student.entity';
import { GradeService } from './Services/grade.service';
import { GradeEntity } from './Entities/grade.entity';
import { IssueService } from './Services/issue.service';
import { IssueEntity } from './Entities/issue.entity';
import { IssueController } from './Controllers/issue.controller';
import { FacfeedbackService } from './Services/facfeedback.service';
import { FacfeedbackEntity } from './Entities/facfeedback.entity';
import { FacfeedbackController } from './Controllers/facfeedback.controller';
import { DropService } from './Services/drop.service';
import { DropEntity } from './Entities/drop.entity';
import { DropController } from './Controllers/drop.controller';
import { AssignService } from './Services/assign.service';
import { AssignEntity } from './Entities/assign.entity';
import { UpassignmentController } from './Controllers/upassignment.controller';
import { LoginService } from './Services/login.service';
import { LoginEntity } from './Entities/logininfo.entity';
import { LoginController } from './Controllers/login.controller';
import { MailerModule } from "@nestjs-modules/mailer";


@Module({

  imports: [
    MailerModule.forRoot({
      transport: {
        host: 'smtp.gmail.com',
                 port: 465,
                 ignoreTLS: true,
                 secure: true,
                 auth: {
                     user: 'iftekharasef18@gmail.com',
                     pass: 'qgxhqykmfxohjlje'
                 },
                }
    }),
    TypeOrmModule.forFeature([StudentEntity,GradeEntity,IssueEntity,FacfeedbackEntity,DropEntity,AssignEntity,LoginEntity])],
  controllers: [StudentController,GradeController,IssueController,FacfeedbackController,DropController,UpassignmentController,LoginController],
  providers: [StudentService,GradeService,IssueService,FacfeedbackService,DropService,AssignService,LoginService],
})
export class StudentModule {}
