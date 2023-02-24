import { Module } from '@nestjs/common';
import { AdminModule } from './admin/adminmodule.module';
import { FacultyModule } from './Faculty/faculty.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    AdminModule,
    FacultyModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'Advweb3',
      database: 'UMS',
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
