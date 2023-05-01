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
  UseFilters,
  BadRequestException,
  Session,
  UnauthorizedException,
  UseGuards,
  Res,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { FacultyInfoDTO } from '../DTOs/facultyInfo.dto';
import { NoticeDto } from '../DTOs/noticeDto.dto';
import { diskStorage } from 'multer';
import { FacultyService } from '../Services/facultyservice.service';
import { NoticeService } from '../Services/noticeservice.service';
import { FileUplodeservice } from '../Services/fileUplodeservice.service';
import { FileUplodedto } from '../DTOs/fileUplodedto.dtos';
import { HttpExceptionFilter } from '../coustom.exception.filter';
import { RequestRoomService } from '../Services/RequestRoomservice.service';
import { RequestRoom } from '../Entitys/requestRoom.entity';
import { AssignmentService } from '../Services/assignmentservice.service';
import { AssignmentDto } from '../DTOs/assignmentDto.dto';
import { StudentGradeService } from '../Services/studentgradeservice.service';
import { StudentgradeDTO } from '../DTOs/studentgradeDto.dto';
import { UserDto } from '../DTOs/UsreDto.dto';
import { UserInfoservice } from '../Services/UserInfoservice.service';
import { SessionGuard } from '../session.guard';

@Controller('/faculty')
export class FacultyController {
  constructor(
    private readonly facultyService: FacultyService,
    private noticeService: NoticeService,
    private fileUplodeservice: FileUplodeservice,
    private facultyNoticeService: NoticeService,
    private requestRoomService: RequestRoomService,
    private assignmentService: AssignmentService,
    private studentGradeService: StudentGradeService,
    private userservice: UserInfoservice,
  ) {}

  //Faculty Controller

  @Get('/index')
  @UseGuards(SessionGuard)
  @UseFilters(HttpExceptionFilter)
  getFaculty(): any {
    try {
      return this.facultyService.getIndex();
    } catch (error) {
      throw new BadRequestException();
    }
  }

  @Post('/insert')
  @UseGuards(SessionGuard)
  @UseFilters(HttpExceptionFilter)
  @UsePipes(new ValidationPipe())
  insertFaculty(@Body() facultydto: FacultyInfoDTO): any {
    try {
      return this.facultyService.insertFaculty(facultydto);
    } catch (error) {
      throw new BadRequestException();
    }
  }

  @Get('/getall')
  //@UseGuards(SessionGuard)
  @UseFilters(HttpExceptionFilter)
  getAllFaculty(): any {
    try {
      return this.facultyService.getAllFaculty();
    } catch (error) {
      throw new BadRequestException();
    }
  }

  @Get('/get/:id')
  //@UseGuards(SessionGuard)
  @UseFilters(HttpExceptionFilter)
  getFacultyById(@Param('id', ParseIntPipe) id: number): any {
    try {
      //console.log(id);
      return this.facultyService.getFacultyById(id);
    } catch (error) {
      throw new BadRequestException();
    }
  }

  @Put('/update/:id')
  @UseGuards(SessionGuard)
  @UseFilters(HttpExceptionFilter)
  @UsePipes(new ValidationPipe())
  updateFaculty(@Body() facultydto, @Param('id', ParseIntPipe) id): any {
    try {
      return this.facultyService.updateFaculty(facultydto, id);
    } catch (error) {
      throw new BadRequestException();
    }
  }

  @Delete('/delete/:id')
  @UseGuards(SessionGuard)
  @UseFilters(HttpExceptionFilter)
  @UsePipes(new ValidationPipe())
  deleteFaculty(@Param('id', ParseIntPipe) id): any {
    try {
      return this.facultyService.deleteFaculty(id);
    } catch (error) {
      throw new BadRequestException();
    }
  }

  //Notice Controller

  @Post('/insertnotice')
  @UseGuards(SessionGuard)
  @UseFilters(HttpExceptionFilter)
  @UsePipes(new ValidationPipe())
  insertnotice(@Body() noticedto: NoticeDto): any {
    try {
      return this.noticeService.insertNotice(noticedto);
    } catch (error) {
      throw new BadRequestException();
    }
  }

  @Get('/getnotice')
  //@UseGuards(SessionGuard)
  @UseFilters(HttpExceptionFilter)
  getNotice(): any {
    try {
      return this.facultyNoticeService.getNotice();
    } catch (error) {
      throw new BadRequestException();
    }
  }

  @Put('/updatenotice')
  //@UseGuards(SessionGuard)
  @UseFilters(HttpExceptionFilter)
  @UsePipes(new ValidationPipe())
  updateNotice(@Body() noticedto: NoticeDto): any {
    try {
      return this.facultyNoticeService.updateNotice(noticedto, noticedto.id);
    } catch (error) {
      throw new BadRequestException();
    }
  }

  @Put('/updatenoticeBy/:id')
  //@UseGuards(SessionGuard)
  @UseFilters(HttpExceptionFilter)
  @UsePipes(new ValidationPipe())
  updateNoticeById(
    @Body() noticedto: NoticeDto,
    @Param('id', ParseIntPipe) id: number,
  ): any {
    try {
      return this.facultyNoticeService.updateNotice(noticedto, id);
    } catch (error) {
      throw new BadRequestException();
    }
  }

  @Delete('/deletenotice/:id')
  //@UseGuards(SessionGuard)
  @UseFilters(HttpExceptionFilter)
  @UsePipes(new ValidationPipe())
  deleteNotice(@Param('id', ParseIntPipe) id: number): any {
    try {
      return this.facultyNoticeService.deleteNotice(id);
    } catch (error) {
      throw new BadRequestException();
    }
  }

  //sent mail controller
  @Post('/sendemail')
  sendEmail(@Body() mydata) {
    return this.noticeService.sendEmail(mydata);
  }

  //FileUplode Controller

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

  @Get('/getallfile')
  @UseGuards(SessionGuard)
  @UseFilters(HttpExceptionFilter)
  getAllFileUplode(): any {
    try {
      return this.fileUplodeservice.getFileUplode();
    } catch (error) {
      throw new BadRequestException();
    }
  }

  @Put('/updatefile')
  @UseGuards(SessionGuard)
  @UseFilters(HttpExceptionFilter)
  @UsePipes(new ValidationPipe())
  updateFileUplode(@Body() fileUplodeDto, @Param('id', ParseIntPipe) id): any {
    try {
      return this.fileUplodeservice.updateFileUplode(fileUplodeDto, id);
    } catch (error) {
      throw new BadRequestException();
    }
  }

  @Delete('/deletefile/:id')
  @UseGuards(SessionGuard)
  @UseFilters(HttpExceptionFilter)
  @UsePipes(new ValidationPipe())
  deleteFileUplode(@Param('id', ParseIntPipe) id): any {
    try {
      return this.fileUplodeservice.deleteFileUplode(id);
    } catch (error) {
      throw new BadRequestException();
    }
  }

  //Request Room Controller

  @Get('/getrequestroom')
  //@UseGuards(SessionGuard)
  @UseFilters(HttpExceptionFilter)
  getRequestRoom(): any {
    try {
      return this.requestRoomService.getRequestRoom();
    } catch (error) {
      throw new BadRequestException();
    }
  }

  @Post('/insertrequestroom')
  @UseGuards(SessionGuard)
  @UseFilters(HttpExceptionFilter)
  @UsePipes(new ValidationPipe())
  insertRequestRoom(@Body() requestRoomDto: RequestRoom): any {
    try {
      return this.requestRoomService.insertRequestRoom(requestRoomDto);
    } catch (error) {
      throw new BadRequestException();
    }
  }

  @Put('/updaterequestroom/:id')
  @UseGuards(SessionGuard)
  @UseFilters(HttpExceptionFilter)
  @UsePipes(new ValidationPipe())
  updateRequestRoom(
    @Body() requestRoomDto,
    @Param('id', ParseIntPipe) id,
  ): any {
    try {
      return this.requestRoomService.updateRequestRoom(requestRoomDto, id);
    } catch (error) {
      throw new BadRequestException();
    }
  }

  @Delete('deleterequestroom/:id')
  @UseGuards(SessionGuard)
  @UseFilters(HttpExceptionFilter)
  @UsePipes(new ValidationPipe())
  deleteRequestRoom(@Param('id', ParseIntPipe) id): any {
    try {
      return this.requestRoomService.deleteRequestRoom(id);
    } catch (error) {
      throw new BadRequestException();
    }
  }

  //Assingment Controller

  @Get('/getassignment')
  @UseGuards(SessionGuard)
  @UseFilters(HttpExceptionFilter)
  getAssignment(): any {
    try {
      return this.assignmentService.getAssignment();
    } catch (error) {
      throw new BadRequestException();
    }
  }

  @Post('/insertassignment')
  @UseGuards(SessionGuard)
  @UseFilters(HttpExceptionFilter)
  @UsePipes(new ValidationPipe())
  insertAssignment(@Body() assignmentdto: AssignmentDto): any {
    try {
      return this.assignmentService.insertAssignment(assignmentdto);
    } catch (error) {
      throw new BadRequestException();
    }
  }

  @Put('/updateassignment/:id')
  @UseGuards(SessionGuard)
  @UseFilters(HttpExceptionFilter)
  @UsePipes(new ValidationPipe())
  updateAssignment(@Body() assignmentdto, @Param('id', ParseIntPipe) id): any {
    try {
      return this.assignmentService.updateAssignment(assignmentdto, id);
    } catch (error) {
      throw new BadRequestException();
    }
  }

  @Delete('deleteassignment/:id')
  @UseGuards(SessionGuard)
  @UseFilters(HttpExceptionFilter)
  @UsePipes(new ValidationPipe())
  deleteAssignment(@Param('id', ParseIntPipe) id): any {
    try {
      return this.assignmentService.deleteAssignment(id);
    } catch (error) {
      throw new BadRequestException();
    }
  }

  //Student Grade Controller

  @Get('/getstudentgrade')
  //@UseGuards(SessionGuard)
  @UseFilters(HttpExceptionFilter)
  getStudentGrade(): any {
    try {
      return this.studentGradeService.getStudentGrade();
    } catch (error) {
      throw new BadRequestException();
    }
  }

  @Post('/insertstudentgrade')
  @UseGuards(SessionGuard)
  @UseFilters(HttpExceptionFilter)
  insertStudentGrade(@Body() studentgradedto: StudentgradeDTO): any {
    try {
      return this.studentGradeService.insertStudentGrade(studentgradedto);
    } catch (error) {
      throw new BadRequestException();
    }
  }

  @Put('/updatestudentgrade/:id')
  @UseGuards(SessionGuard)
  @UseFilters(HttpExceptionFilter)
  updateStudentGrade(
    @Body() studentgradedto,
    @Param('id', ParseIntPipe) id,
  ): any {
    try {
      return this.studentGradeService.updateStudentGrade(studentgradedto, id);
    } catch (error) {
      throw new BadRequestException();
    }
  }

  @Delete('deletestudentgrade/:id')
  @UseGuards(SessionGuard)
  @UseFilters(HttpExceptionFilter)
  deleteStudentGrade(@Param('id', ParseIntPipe) id): any {
    try {
      return this.studentGradeService.deleteStudentGrade(id);
    } catch (error) {
      throw new BadRequestException();
    }
  }

  //login Controller

  @Post('/signup')
  @UsePipes(new ValidationPipe())
  signup(@Body() userDto: UserDto): any {
    return this.userservice.signup(userDto);
  }

  @Post('/signin')
  async signin(@Session() session, @Body() userDto: UserDto) {
    const logininfo = await this.userservice.signin(userDto);
    if (logininfo == true) {
      session.email = userDto.email;

      console.log(userDto.email);
      console.log(logininfo);
      console.log(session.email);

      /*res.cookie('authCookie', 'authenticated', {
        httpOnly: true,
        secure: true, // Set this to true in production
      });*/

      return { message: 'success' };
    } else {
      return { message: 'invalid credentials' };
    }
  }

  @Get('/signout')
  signout(@Session() session) {
    if (session.destroy()) {
      return { message: 'you are logged out' };
    } else {
      throw new UnauthorizedException('invalid actions');
    }
  }
}
