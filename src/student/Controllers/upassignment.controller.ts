import {
    BadRequestException,
    Body,
    Controller,
    Delete,
    FileTypeValidator,
    Get,
    MaxFileSizeValidator,
    Param,
    ParseFilePipe,
    ParseIntPipe,
    Post,
    UploadedFile,
    UseFilters,
    UseGuards,
    UseInterceptors,
   
}from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { AssignForm } from '../DTOs/assignform.dto';
import { AssignService } from '../Services/assign.service';
import { HttpExceptionFilter } from "../custom.exception.filter";
import { SessionGuard } from '../session.guard';


@Controller('/upassign')
export class UpassignmentController {

constructor(private assignService: AssignService){}

@Post('/upload')
// @UseGuards(SessionGuard)
@UseFilters(new HttpExceptionFilter())
@UseInterceptors(FileInterceptor('myfile',
{storage:diskStorage({
  destination: './uploads',
  filename: function (req, file, cb) {
    cb(null,Date.now()+file.originalname)
  }
})

}))
uploadAssign(@Body() mydto:AssignForm,@UploadedFile(  new ParseFilePipe({
  validators: [
    new MaxFileSizeValidator({ maxSize: 5000000 }),
    new FileTypeValidator({ fileType: 'pdf' }),
  ],
}),) file: Express.Multer.File){

mydto.filename = file.filename;  
try{
return this.assignService.uploadAssign(mydto);
}catch(e){
throw new BadRequestException(e.message);
}
}
}