import { Module } from "@nestjs/common";
import { AdminController } from "../CONTROLLER/admin.controller"
import { AdminService } from "../SERVICE/adminservice.service"
import { AdminEntity } from "../ENTITY/adminentity.entity"
import { CourseEntity } from "../ENTITY/course.entity"
import { TypeOrmModule } from "@nestjs/typeorm";
import { NoticeEntity } from "../ENTITY/notice.entity";

@Module({
    imports: [TypeOrmModule.forFeature([AdminEntity,CourseEntity,NoticeEntity])],
    controllers: [AdminController],
    providers: [AdminService],
    
    })
    
    export class AdminModule {}