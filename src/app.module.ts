import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminModule } from './admin/adminmodule.module';
import { FacultyModule } from './Faculty/faculty.module';

@Module({
  imports: [AdminModule, FacultyModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
