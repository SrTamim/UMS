import { Injectable } from "@nestjs/common";
import { AdminForm,AdminRoom,AdminCourse,AdminNotice } from "./adminform.dto";
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm';
import { AdminEntity } from "./adminentity.entity"

@Injectable()
export class AdminService {
    constructor(
        @InjectRepository(AdminEntity)
        private adminRepo: Repository<AdminEntity>,
      ) {}

getIndex():any { 
    return this.adminRepo.find();
    //return "Welcome Admin"; 

}
getAdminByID(id):any {
    return this.adminRepo.findOneBy({ id });
    //return "Admin id is "+id;
}

getAdminByIDName(qry):any {
    return this.adminRepo.findOneBy({ id:qry.id,name:qry.name });
    //return "Admin id is "+qry.id +" and Admin is "+qry.name;
}

insertAdmin(mydto:AdminForm):any {
    const adminaccount = new AdminEntity()
    adminaccount.name = mydto.name;
    return this.adminRepo.save(adminaccount);
        //return "Admin Inserted name: " + mydto.name+" and id is: " + mydto.id;
    }

updateAdmin(name,id):any {
        return "Admin updated name: " +name+" and id is: " +id;
    }
updateAdminbyid(name,id):any {
        return "Update admin where id: " +id+" and change name to: " +name;
    }
    deleteAdminbyid(id):any {
    
        return "Delete Admin id is: "+id;
    }
	
	//////////////////////////////////////////
    getCourseByID(Cid):any {
        return "Course id is: "+Cid;
    }
    updateCoursebyid(Cname,Cid):any {
        return "Update Course where id " +Cid+" and change name to " +Cname;
    }
    //------------------
    insertRoom(mydto:AdminRoom):any {
        return " Room id is " + mydto.Rid;
    }
    updateRoombyid(Rid):any {
        return "Update Room id " +Rid;
    }

    //------------
    insertNotice(mydto:AdminNotice):any {
        return " Notice id is " + mydto.Nid;
    }

    updateGradebyid(Sname,Sid):any {
        return "Update Grade where id " +Sid+" and change name to " +Sname;
    }

    

}