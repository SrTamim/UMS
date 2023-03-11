import {
  Controller,
  Get,
  Body,
  Post,
  Param,
  UsePipes,
  ValidationPipe,
  ParseIntPipe,
  Put,
  Delete,
  UploadedFile,
  UseInterceptors,
  FileTypeValidator,
  ParseFilePipe,
  MaxFileSizeValidator,
} from '@nestjs/common';
import { UnauthorizedException } from '@nestjs/common/exceptions';
import { FileInterceptor } from '@nestjs/platform-express';
import { FacultyInfoDTO } from '../DTOs/facultyInfo.dto';
import { NoticeDto } from '../DTOs/noticeDto.dto';
import { FileUplode } from '../Entitys/fileUplode.entity';
import { diskStorage } from 'multer';
import { FacultyService } from '../Services/facultyservice.service';
import { NoticeService } from '../Services/noticeservice.service';
import { FileUplodeservice } from '../Services/fileUplodeservice.service';
import { FileUplodedto } from '../DTOs/fileUplodedto.dtos';

@Controller('/faculty')
export class FacultyController {
  constructor(
    private readonly facultyService: FacultyService,
    private noticeService: NoticeService,
    private fileUplodeservice: FileUplodeservice,
  ) {}

  @Get('/index')
  getFaculty(): any {
    return this.facultyService.getIndex();
  }

  @Post('/insert')
  @UsePipes(new ValidationPipe())
  insertFaculty(@Body() facultydto: FacultyInfoDTO): any {
    return this.facultyService.insertFaculty(facultydto);
  }

  @Get('/getall')
  getAllFaculty(): any {
    return this.facultyService.getAllFaculty();
  }

  @Get('/get/:id')
  getFacultyById(@Param('id', ParseIntPipe) id: number): any {
    return this.facultyService.getFacultyById(id);
  }

  @Put('/update/:id')
  @UsePipes(new ValidationPipe())
  updateFaculty(@Body() facultydto, @Param('id', ParseIntPipe) id): any {
    return this.facultyService.updateFaculty(facultydto, id);
  }

  @Delete('/delete/:id')
  @UsePipes(new ValidationPipe())
  deleteFaculty(@Param('id', ParseIntPipe) id): any {
    return this.facultyService.deleteFaculty(id);
  }

  @Post('/insertnotice')
  @UsePipes(new ValidationPipe())
  insertnotice(@Body() noticedto: NoticeDto): any {
    return this.noticeService.insertNotice(noticedto);
  }

  @Post('/fileupload')
  @UseInterceptors(
    FileInterceptor('myfile', {
      storage: diskStorage({
        destination: './uploads',
        filename: function (req, file, cb) {
          cb(null, Date.now() + file.originalname);
        },
      }),
    }),
  )
  insertFileUplode(
    @Body() mydto: FileUplodedto,
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          new MaxFileSizeValidator({ maxSize: 160000 }),
          new FileTypeValidator({ fileType: 'pdf' }),
        ],
      }),
    )
    file: Express.Multer.File,
  ) {
    mydto.files = file.filename;
    return this.fileUplodeservice.insertFileUplode(mydto);
  }
}
