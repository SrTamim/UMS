import { Module } from "@nestjs/common";
import { RegController } from "./reg.controller"
import { RegService } from "./reg.service"
import { RegEntity } from "./reg.entity"
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
    imports: [TypeOrmModule.forFeature([RegEntity])],
    controllers: [RegController],
    providers: [RegService],
    
    })
    
    export class AdminModule {}