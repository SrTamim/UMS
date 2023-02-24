import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FacultyController } from './Controllers/facultyController.controller';
import { FacultyInfo } from './Entitys/facultyInfo.entity';
import { FacultyService } from './Services/facultyservice.service';
@Module({
  imports: [TypeOrmModule.forFeature([FacultyInfo])],
  controllers: [FacultyController],
  providers: [FacultyService],
})
export class FacultyModule {}
