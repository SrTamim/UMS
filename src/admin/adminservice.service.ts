import { Injectable } from "@nestjs/common";
import { AdminForm,AdminRoom,AdminCourse,AdminNotice } from "./adminform.dto";
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm';
import { AdminEntity} from "./adminentity.entity"
import { CourseEntity } from "./course.entity"
import { NoticeEntity } from "./notice.entity"

@Injectable()
export class AdminService {
    constructor(
        @InjectRepository(AdminEntity)
        private adminRepo: Repository<AdminEntity>,
        @InjectRepository(CourseEntity)
        private courseRepo: Repository<CourseEntity>,
        @InjectRepository(NoticeEntity)
        private noticeRepo: Repository<NoticeEntity>,
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
        console.log(name+id);
        return this.adminRepo.update(id,{name:name});
        //return "Admin updated name: " +name+" and id is: " +id;
    }

updateAdminbyid(mydto:AdminForm,id):any {
    return this.adminRepo.update(id,mydto);
        //return "Update admin where id: " +id+" and change name to: " +name;
    }
    deleteAdminbyid(id):any {
        return this.adminRepo.delete(id);
        //return "Delete Admin id is: "+id;
    }
	
	//////////////////////////////////////////
    insertCourse(mydto:AdminCourse):any {
        const courseaccount = new CourseEntity()
        courseaccount.Cname = mydto.Cname;
        return this.courseRepo.save(courseaccount);
        //return " Notice id is " + mydto.Nid;
    }

    getCourseByID(Cid):any {
        return this.courseRepo.findOneBy({ Cid });
        //return "Course id is: "+Cid;
    }
    updateCoursebyid(Cname,Cid):any {
        console.log(Cname+Cid);
        return this.courseRepo.update(Cid,{Cname:Cname});
        //return "Update Course where id " +Cid+" and change name to " +Cname;
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
        const noticeaccount = new NoticeEntity()
        noticeaccount.details = mydto.details;
        return this.noticeRepo.save(noticeaccount);
        //return " Notice id is " + mydto.Nid;
    }

    PatchNoticebyid(Nid,details):any {
        console.log(Nid+details);
        return this.noticeRepo.update(Nid,{details:details});
    }

    updateGradebyid(Sname,Sid):any {
        return "Update Grade where id " +Sid+" and change name to " +Sname;
    }

}