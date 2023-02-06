import { Body, Controller, Delete, Get, Param, Put, Query, Post } from "@nestjs/common";
import { AdminService } from "./adminservice.service";
import { AdminForm } from "./adminform.dto";


@Controller("/admin")
export class AdminController
{ 
  constructor(private adminService: AdminService){}

  @Get("/index")
    getAdmin(): any { 
        return this.adminService.getIndex();
    }
    @Get("/findadmin/:id")
    getAdminByID(@Param("id") id:number,): any {
      return this.adminService.getAdminByID(id);
    }

    @Get("/findadmin")
    getAdminByIDName(@Query() qry:any): any {
      return this.adminService.getAdminByIDName(qry);
    }  
  
    @Put("/updateadmin/")
    updateAdmin( 
      @Body("name") name:string, 
      @Body("id") id:number
      ): any {
    return this.adminService.updateAdmin(name, id);
    }
    
    @Put("/updateadmin/:id")
  updateAdminbyid( 
      @Body("name") name:string, 
      @Param("id") id:number
      ): any {
    return this.adminService.updateAdminbyid(name,id);
    }

    @Delete("/deleteadmin/:id")
  deleteAdminbyid( 
     @Param("id") id:number
      ): any {
    return this.adminService.deleteAdminbyid(id);
    }

    //---------------------

    @Get("/findCourse")
    getCourseByID(@Query() qry:any): any {
      return this.adminService.getCourseByID(qry);
    }  

    @Put("/updateCourse/:id")
    updateCoursebyid( 
        @Body("Cname") Cname:string, 
        @Param("Cid") Cid:number
        ): any {
      return this.adminService.updateCoursebyid(Cname,Cid);
      }

      //----------------------
      @Post("/insertRoom")
      insertRoom(@Body() mydto:AdminForm): any {
        return this.adminService.insertRoom(mydto);
      }

      @Put("/updateRoom/:Rid")
    updateRoombyid( 
        @Param("Rid") Rid:number
        ): any {
      return this.adminService.updateRoombyid(Rid);
      }

      //-------------
      @Post("/insertNotice")
      insertNotice(@Body() mydto:AdminForm): any {
        return this.adminService.insertNotice(mydto);
      }

      //----------
      @Put("/updateGrade/:id")
      updateGradebyid( 
          @Body("StudentName") Sname:string, 
          @Param("Sid") Sid:number
          ): any {
        return this.adminService.updateGradebyid(Sname,Sid);
        }


}