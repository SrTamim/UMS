import { Module } from "@nestjs/common";
import { AdminController } from "./admin.controller"
import { AdminService } from "./adminservice.service"
import { AdminEntity } from "./adminentity.entity"
import { CourseEntity } from "./course.entity"
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
    imports: [TypeOrmModule.forFeature([AdminEntity,CourseEntity])],
    controllers: [AdminController],
    providers: [AdminService],
    
    })
    
    export class AdminModule {}