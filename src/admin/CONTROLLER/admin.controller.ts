import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Query, UsePipes, ValidationPipe,Patch } from "@nestjs/common";
import { AdminForm,AdminRoom,AdminCourse,AdminNotice,Adminstudent,Adminfaculty,Adminofficer,Adminfacultysal,Adminofficersal} from "../DTO/adminform.dto";
import { AdminService } from "../SERVICE/adminservice.service";


@Controller('/admin')
export class AdminController {
  constructor(private adminService: AdminService) {}
  @Get("/admin")
    getAdmin(): any { 
        return this.adminService.getIndex();
    }

    @Get("/findadmin/:id")
    @UsePipes(new ValidationPipe())
    getAdminByID(@Param("id", ParseIntPipe) id:number,): any {
      return this.adminService.getAdminByID(id);
    }

    @Get("/findadmin")
    @UsePipes(new ValidationPipe())
    getAdminByIDName(@Query() qry:any): any {
      return this.adminService.getAdminByIDName(qry);
    }  
//------------------------------------------------------------------------------------------------------------------------------
    @Post("/insertAdmin")
    @UsePipes(new ValidationPipe())
    insertAdmin(@Body() mydto:AdminForm): any {
      return this.adminService.insertAdmin(mydto);
    }

      @Post("/insertfaculty")
      @UsePipes(new ValidationPipe())
      insertfaculty(@Body() mydto:Adminfaculty): any {
        return this.adminService.insertfaculty(mydto);
      }

        @Post("/insertstudent")
        @UsePipes(new ValidationPipe())
        insertstudent(@Body() mydto:Adminstudent): any {
          return this.adminService.insertstudent(mydto);
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
//--------------------------------------------------------------------------------------------------------------------------------
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
      @Body("Fsid",ParseIntPipe) Fsid:number,
      @Body("Fsfid") Fsfid:number, 
      @Body("month") month:string, 
      @Body("year") year:string,
      @Body("amount") amount:string,
      ): any {
    return this.adminService.updateFacultysal(Fsid, Fsfid,month,year,amount);
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
        @Body("Fsid", ParseIntPipe) Fsid:number
          ): any {
        return this.adminService.deleteFacultysalbyid(Fsid);
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

    @Get('/findCourse/:Cid')
    @UsePipes(new ValidationPipe())
    getCourseByID(@Param('Cid', ParseIntPipe) Cid: number): any {
      return this.adminService.getCourseByID(Cid);
    }

    @Put("/updateCourse/")
    @UsePipes(new ValidationPipe())
    updateCoursebyid( 
        @Body('Cname') Cname:string, 
        @Body('Cid', ParseIntPipe) Cid:number
        ): any {
      return this.adminService.updateCoursebyid(Cname,Cid);
      }

      //----------------------
      @Post("/insertRoom")
      @UsePipes(new ValidationPipe())
      insertRoom(@Body() mydto:AdminRoom): any {
        return this.adminService.insertRoom(mydto);
      }

      @Put("/updateRoom/:Rid")
      @UsePipes(new ValidationPipe())
    updateRoombyid( 
        @Param("Rid",ParseIntPipe) Rid:number
        ): any {
      return this.adminService.updateRoombyid(Rid);
      }

      @Patch("/updateNotice/")
      @UsePipes(new ValidationPipe())
      PatchNoticebyid( 
        @Body('Nid', ParseIntPipe) Nid:number,
        @Body('details') details:string
          ): any {
        return this.adminService.PatchNoticebyid(Nid,details);
        }

      //----------
      @Put("/updateGrade/:id")
      @UsePipes(new ValidationPipe())
      updateGradebyid( 
          @Body("StudentName") Sname:string, 
          @Param("Sid",ParseIntPipe) Sid:number
          ): any {
        return this.adminService.updateGradebyid(Sname,Sid);
        }

}
