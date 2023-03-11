import {
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
    Put,
    Query,
    UploadedFile,
    UseInterceptors,
    UsePipes,
    ValidationPipe,
    Session,
    UseGuards
  }from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { AssignForm } from '../DTOs/assignform.dto';
import { AssignService } from '../Services/assign.service';


@Controller('/upassign')
export class UpassignmentController {

constructor(private assignService: AssignService){}

@Post('/upload')
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
    new MaxFileSizeValidator({ maxSize: 2000000 }),
    new FileTypeValidator({ fileType: '.docx' }),
  ],
}),) file: Express.Multer.File){

mydto.filename = file.filename;  

return this.assignService.uploadAssign(mydto);
}
}