import { Module } from "@nestjs/common";
import { AdminController } from "../CONTROLLER/admin.controller"
import { AdminService } from "../SERVICE/adminservice.service"
import { AdminEntity } from "../ENTITY/adminentity.entity"
import { CourseEntity } from "../ENTITY/course.entity"
import { TypeOrmModule } from "@nestjs/typeorm";
import { NoticeEntity } from "../ENTITY/notice.entity";
import { FacultyEntity } from "../ENTITY/faculty.entity";
import { OfficerEntity } from "../ENTITY/officer.entity";
import { StudentEntity } from "../ENTITY/student.entity";
import { FacultysalEntity } from "../ENTITY/facultysal.entity";

@Module({
    imports: [TypeOrmModule.forFeature([AdminEntity,CourseEntity,NoticeEntity,FacultyEntity,OfficerEntity,StudentEntity,FacultysalEntity])],
    controllers: [AdminController],
    providers: [AdminService],
    
    })
    
    export class AdminModule {}