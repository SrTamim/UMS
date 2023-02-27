import { Module } from '@nestjs/common';
import { AdminModule } from './admin/adminmodule.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [AdminModule, TypeOrmModule.forRoot(
   { type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'admin',
    database: 'UMS',
    autoLoadEntities: true,
    synchronize: true,
  }
  ),],
  controllers: [],
  providers: [],
})
export class AppModule {}
