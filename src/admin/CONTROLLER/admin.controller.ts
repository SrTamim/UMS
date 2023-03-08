import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Query, UsePipes, ValidationPipe,Patch } from "@nestjs/common";
import { AdminForm, AdminRoom,AdminCourse,AdminNotice} from "../DTO/adminform.dto";
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

    @Post("/insertAdmin")
    @UsePipes(new ValidationPipe())
    insertAdmin(@Body() mydto:AdminForm): any {
      return this.adminService.insertAdmin(mydto);
    }
  
    @Put("/updateAdmin/")
    @UsePipes(new ValidationPipe())
    updateAdmin( 
      @Body("name") name:string, 
      @Body("id",ParseIntPipe) id:number
      ): any {
    return this.adminService.updateAdmin(name, id);
    }
    
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
	 //--------------------------
   @Post("/insertCourse")
   @UsePipes(new ValidationPipe())
   insertCourse(@Body() mydto:AdminCourse): any {
     return this.adminService.insertCourse(mydto);
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

      //-------------
      @Post("/insertNotice")
      @UsePipes(new ValidationPipe())
      insertNotice(@Body() mydto:AdminNotice): any {
        return this.adminService.insertNotice(mydto);
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
