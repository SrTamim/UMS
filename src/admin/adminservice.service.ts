import { Injectable } from "@nestjs/common";
import { AdminForm } from "./adminform.dto";

@Injectable()
export class AdminService {

getIndex():string { 
    return "Welcome Admin"; 

}
getAdminByID(id):any {
    return "Admin id is "+id;
}

getAdminByIDName(qry):any {
    
    return "Admin id is "+qry.id +" and name is "+qry.name;
}

updateAdmin(name,id):any {
        return "Admin updated name: " +name+" and id is " +id;
    }
updateAdminbyid(name,id):any {
        return "Update admin where id " +id+" and change name to " +name;
    }
    deleteAdminbyid(id):any {
    
        return "Delete id is "+id;
    }
    //---------------
    getCourseByID(Cid):any {
        return "Course id is "+Cid;
    }
    updateCoursebyid(Cname,Cid):any {
        return "Update Course where id " +Cid+" and change name to " +Cname;
    }
    //------------------
    insertRoom(mydto:AdminForm):any {
        return " Room id is " + mydto.Rid;
    }
    updateRoombyid(Rid):any {
        return "Update Room id " +Rid;
    }

    //------------
    insertNotice(mydto:AdminForm):any {
        return " Notice id is " + mydto.Nid;
    }

    updateGradebyid(Sname,Sid):any {
        return "Update Grade where id " +Sid+" and change name to " +Sname;
    }


    
}