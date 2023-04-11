import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Query, UsePipes, ValidationPipe,Patch,
          FileTypeValidator,MaxFileSizeValidator,ParseFilePipe,UploadedFile,
            UseInterceptors,Session,
            UseGuards } from "@nestjs/common";
import { AdminForm,AdminRoom,AdminCourse,AdminNotice,Adminstudent,Adminfaculty,Adminofficer,Adminfacultysal,Adminofficersal} from "../DTO/adminform.dto";
import { AdminService } from "../SERVICE/adminservice.service";
import { UnauthorizedException } from '@nestjs/common/exceptions';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { SessionGuard } from '../SESSION/session.guard';

@Controller('/admin')
export class AdminController {
  constructor(private adminService: AdminService) {}
  // @Get("/admin")
  //   getAdmin(): any { 
  //       return this.adminService.getIndex();
  //   }
//-- view ------------------------
    @Get("/findadmin/:id")
    @UsePipes(new ValidationPipe())
    getAdminByID(@Param("id", ParseIntPipe) id:number,): any {
      return this.adminService.getAdminByID(id);
    }
      @Get("/findStudent/:Sid")
      @UsePipes(new ValidationPipe())
      getStudentByID(@Param("Sid", ParseIntPipe) Sid:number,): any {
        return this.adminService.getStudentByID(Sid);
      }

        @Get("/findFaculty/:Fid")
        @UsePipes(new ValidationPipe())
        getFacultyByID(@Param("Fid", ParseIntPipe) Fid:number,): any {
          return this.adminService.getFacultyByID(Fid);
        }
          @Get("/findFacultysal/:Fid")
          @UsePipes(new ValidationPipe())
          getFacultysalByID(@Param("Fid", ParseIntPipe) Fid:number,): any {
            return this.adminService.getFacultysalByID(Fid);
          }

            @Get("/findOfficer/:Fid")
            @UsePipes(new ValidationPipe())
            getOfficerByID(@Param("Oid", ParseIntPipe) Oid:number,): any {
              return this.adminService.getOfficerByID(Oid);
            }
              @Get("/findOfficersal/:Osid")
              @UsePipes(new ValidationPipe())
              getOfficersalByID(@Param("Osid", ParseIntPipe) Osid:number,): any {
                return this.adminService.getOfficersalByID(Osid);
              }
                @Get('/findCourse/:Cid')
                @UsePipes(new ValidationPipe())
                getCourseByID(@Param('Cid', ParseIntPipe) Cid: number): any {
                  return this.adminService.getCourseByID(Cid);
                }

                @Get('/findsalbyfacultyid/:id')
                findsalbyfacultyid(@Param('Fid', ParseIntPipe) Fid: number): any {
                  return this.adminService.findsalbyfacultyid(Fid);
                }

                //----------------------
                @Get("/findallnotice/")
                getNotice(): any {
                  return this.adminService.getNotice();
                }

                @Get("/findallstudent/")
                getStudent(): any {
                  return this.adminService.getStudent();
                }

                @Get("/findallcourse/")
                getCourse(): any {
                  return this.adminService.getCourse();
                }
                //---------------------------------

                @Get("/findStudentname/:Sname")
                getStudentByName(@Param("Sname") Sname:string,): any {
                return this.adminService.getStudentByName(Sname);
                }

                @Get('/findNotice/:Nid')
                //@UsePipes(new ValidationPipe())
                getNoticeByID(@Param('Nid', ParseIntPipe) Nid: number): any {
                  return this.adminService.getNoticeByID(Nid);
                }

                @Get("/findFacultydep/:Fdep")
                @UsePipes(new ValidationPipe())
                getFacultyBydep(@Param("Fdep") Fdep:number,): any {
                  return this.adminService.getFacultyBydep(Fdep);
                }

                @Get("/findOfficerByid/:Oid")
                @UsePipes(new ValidationPipe())
                getOfficerByid(@Param("Oid") Oid:number,): any {
                  return this.adminService.getOfficerByid(Oid);
                }
      
//----insert-----------------------------------------------------------------------------------------------------------------
    
        @Post("/insertstudent")
        @UsePipes(new ValidationPipe())
        insertstudent(@Body() mydto:Adminstudent): any {
          return this.adminService.insertstudent(mydto);
        }
        
          @Post("/insertfaculty")
          @UsePipes(new ValidationPipe())
          insertfaculty(@Body() mydto:Adminfaculty): any {
            return this.adminService.insertfaculty(mydto);
          }

          @Post("/insertofficer")
          @UsePipes(new ValidationPipe())
          insertofficer(@Body() mydto:Adminofficer): any {
            return this.adminService.insertofficer(mydto);
          }

            @Post("/insertfacultysal")
            @UsePipes(new ValidationPipe())
            insertfacultysal(@Body() mydto:Adminfacultysal): any {
              return this.adminService.insertfacultysal(mydto);
            }

              @Post("/insertofficersal")
              @UsePipes(new ValidationPipe())
              insertofficersal(@Body() mydto:Adminofficersal): any {
                return this.adminService.insertofficersal(mydto);
              }

                @Post("/insertcourse")
                @UsePipes(new ValidationPipe())
                insertcourse(@Body() mydto:AdminCourse): any {
                  return this.adminService.insertcourse(mydto);
                }

                  @Post("/insertnotice")
                  @UsePipes(new ValidationPipe())
                  insertnotice(@Body() mydto:AdminNotice): any {
                    return this.adminService.insertnotice(mydto);
                  }
                
//-----update-------------------------------------------------------------------------------------------------------------------
    @Put("/updateAdmin/")
    @UsePipes(new ValidationPipe())
    updateAdmin( 
      @Body("name") name:string, 
      @Body("id",ParseIntPipe) id:number
      ): any {
    return this.adminService.updateAdmin(name, id);
    }

      @Put("/updateStudent/")
      @UsePipes(new ValidationPipe())
      updateStudent( 
        @Body("Sid",ParseIntPipe) Sid:number,
        @Body("Sidd") Sidd:number, 
        @Body("Sname") Sname:string, 
        @Body("Sprogram") Sprogram:string,
        @Body("Sdep") Sdep:string,
        @Body("Saddress") Saddress:string,
        @Body("Snum") Snum:string,
        @Body("Sdob") Sdob:string
        ): any {
      return this.adminService.updateStudent( Sid,Sidd,Sname, Sprogram, Sdep,Saddress,Snum,Sdob);
      }

        @Put("/updateFaculty/")
        @UsePipes(new ValidationPipe())
        updateFaculty( 
          @Body("Fid",ParseIntPipe) Fid:number,
          @Body("Fidd") Fidd:string, 
          @Body("Fname") Fname:string, 
          @Body("Fprogram") Fprogram:string,
          @Body("Fdep") Fdep:string,
          @Body("Faddress") Faddress:string,
          @Body("Fnum") Fnum:string,
          @Body("Fdob") Fdob:string
          ): any {
        return this.adminService.updateFaculty(Fid,Fidd,Fname,Fprogram,Fdep,Faddress,Fnum,Fdob);
        }

          @Put("/updateOfficer/")
          @UsePipes(new ValidationPipe())
          updateOfficer( 
            @Body("Oid",ParseIntPipe) Oid:number,
            @Body("Oid") Oidd:string, 
            @Body("Oname") Oname:string, 
            @Body("Odep") Odep:string,
            @Body("Oaddress") Oaddress:string,
            @Body("Onum") Onum:string,
            @Body("Odob") Odob:string
            ): any {
          return this.adminService.updateOfficer(Oid, Oidd,Oname,Odep,Oaddress,Onum,Odob);
          }

            @Put("/updateFacultysal/")
            @UsePipes(new ValidationPipe())
            updateFacultysal( 
              @Body("Fid",ParseIntPipe) Fid:number,
              @Body("month") month:string, 
              @Body("year") year:string,
              @Body("amount") amount:string,
              ): any {
            return this.adminService.updateFacultysal(Fid,month,year,amount);
            }

              @Put("/updateOfficersal/")
              @UsePipes(new ValidationPipe())
              updateOfficersal( 
                @Body("Osid",ParseIntPipe) Osid:number,
                @Body("Osfid") Osfid:number, 
                @Body("month") month:string, 
                @Body("year") year:string,
                @Body("amount") amount:string,
                ): any {
              return this.adminService.updateOfficersal(Osid, Osfid,month,year,amount);
              }

                @Put("/updateCourse/")
                @UsePipes(new ValidationPipe())
                updateCourse( 
                  @Body("Cid",ParseIntPipe) Cid:number,
                  @Body("Cname") Cname:number, 
                  @Body("credit") credit:string, 
                  @Body("room") room:string,
                  @Body("time") time:string,
                  ): any {
                return this.adminService.updateCourse(Cid, Cname,credit,room,time);
                }

                  @Put("/updateNotice/")
                  @UsePipes(new ValidationPipe())
                  updateNotice( 
                    @Body("Nid",ParseIntPipe) Nid:number,
                    @Body("Nsub") Nsub:number, 
                    @Body("Ndetails") Ndetails:string, 
                    ): any {
                  return this.adminService.updateNotice(Nid,Nsub, Ndetails);
                  }
// update -------------------------------------------------------------------------------------------------------------------------
// delete -----------------------------------------------------
  @Delete("/deleteStudent/")
  @UsePipes(new ValidationPipe())
  deleteStudentbyid( 
  @Body("Sid", ParseIntPipe) Sid:number
    ): any {
  return this.adminService.deleteStudentbyid(Sid);
  }
    @Delete("/deleteFaculty/")
    @UsePipes(new ValidationPipe())
    deleteFacultybyid( 
    @Body("Fid", ParseIntPipe) Fid:number
      ): any {
    return this.adminService.deleteFacultybyid(Fid);
    }
        @Delete("/deleteOfficer/")
        @UsePipes(new ValidationPipe())
        deleteOfficerbyid( 
        @Body("Oid", ParseIntPipe) Oid:number
          ): any {
        return this.adminService.deleteOfficerbyid(Oid);
        }
          @Delete("/deleteFacultysal/")
          @UsePipes(new ValidationPipe())
          deleteFacultysalbyid( 
          @Body("Fid", ParseIntPipe) Fid:number
            ): any {
          return this.adminService.deleteFacultysalbyid(Fid);
          }
            @Delete("/deleteOfficersal/")
            @UsePipes(new ValidationPipe())
            deleteOfficersalbyid( 
            @Body("Osid", ParseIntPipe) Osid:number
              ): any {
            return this.adminService.deleteOfficersalbyid(Osid);
            }
              @Delete("/deleteCourse/")
              @UsePipes(new ValidationPipe())
              deleteCoursebyid( 
              @Body("Cid", ParseIntPipe) Cid:number
                ): any {
              return this.adminService.deleteCoursebyid(Cid);
              }
                @Delete("/deleteNotice/")
                @UsePipes(new ValidationPipe())
                deleteNoticebyid( 
                @Body("Nid", ParseIntPipe) Nid:number
                  ): any {
                return this.adminService.deleteNoticebyid(Nid);
                }
//-------------------------------------------------------------    
//----Signup------------------------------------------------ 

@Post('/signup')
@UseInterceptors(FileInterceptor('myfile',
{storage:diskStorage({
  destination: './uploads',
  filename: function (_req, file, cb) {
    cb(null,Date.now()+file.originalname)
  }
})

}))
signup(@Body() mydto:AdminForm,@UploadedFile(  new ParseFilePipe({
  validators: [
    new MaxFileSizeValidator({ maxSize: 90000 }),
    new FileTypeValidator({ fileType: 'png|jpg|jpeg|' }),
  ],
}),) 

myfile: Express.Multer.File){
mydto.filename = myfile.filename;  
return this.adminService.signup(mydto);
console.log(myfile.filename)
}

@Get('/signin')
signin(@Session() session, @Body() mydto:AdminForm)
{
if(this.adminService.signin(mydto))
{
  session.email = mydto.email;

  console.log(session.email);
  return {message:"success"};

}
else
{
  return {message:"invalid credentials"};
}

}
@Get('/signout')
signout(@Session() session)
{
  if(session.destroy())
  {
    return {message:"logged out done"};
  }
  else
  {
    throw new UnauthorizedException("invalid actions");
  }
}



//--------------------------------------------------------------------------------------









@Put("/updateAdmin/:id")
    @UsePipes(new ValidationPipe())
      updateAdminbyid( 
        @Body("name") name:any, 
        @Param("id", ParseIntPipe) id:number
      ): any {
    return this.adminService.updateAdminbyid(name,id);
    }

    @Delete("/deleteAdmin/")
    @UsePipes(new ValidationPipe())
    deleteAdminbyid( 
     @Body("id", ParseIntPipe) id:number
      ): any {
    return this.adminService.deleteAdminbyid(id);
  }
      @Put("/updateGrade/:id")
      @UsePipes(new ValidationPipe())
      updateGradebyid( 
          @Body("StudentName") Sname:string, 
          @Param("Sid",ParseIntPipe) Sid:number
          ): any {
        return this.adminService.updateGradebyid(Sname,Sid);
        }

}
