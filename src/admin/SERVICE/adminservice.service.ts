import { Injectable } from "@nestjs/common";
import { AdminForm,AdminRoom,AdminCourse,AdminNotice,Adminstudent,Adminfaculty,Adminofficer,Adminfacultysal,Adminofficersal } from "../DTO/adminform.dto";
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm';
import { AdminEntity} from "../ENTITY/adminentity.entity"
import { CourseEntity } from "../ENTITY/course.entity"
import { NoticeEntity } from "../ENTITY/notice.entity"
import { StudentEntity } from "../ENTITY/student.entity"
import { FacultyEntity } from "../ENTITY/faculty.entity"
import { OfficerEntity } from "../ENTITY/officer.entity"
import { FacultysalEntity } from "../ENTITY/facultysal.entity"
import { OfficersalEntity } from "../ENTITY/officersal.entity"

@Injectable()
export class AdminService {
    constructor(
        @InjectRepository(AdminEntity)
        private adminRepo: Repository<AdminEntity>,
        @InjectRepository(CourseEntity)
        private courseRepo: Repository<CourseEntity>,
        @InjectRepository(NoticeEntity)
        private noticeRepo: Repository<NoticeEntity>,

        @InjectRepository(StudentEntity)
        private studentRepo: Repository<StudentEntity>,
        @InjectRepository(FacultyEntity)
        private facultyRepo: Repository<FacultyEntity>,
        @InjectRepository(OfficerEntity)
        private officerRepo: Repository<OfficerEntity>,

        @InjectRepository(FacultysalEntity)
        private facultysalRepo: Repository<FacultysalEntity>,
        @InjectRepository(OfficersalEntity)
        private officersalRepo: Repository<OfficersalEntity>,
      ) {}

getIndex():any { 
    return "Welcome Admin"; 
}
//---- get / view --------------------------------------------
getAdminByID(id):any {
    return this.adminRepo.findOneBy({ id });
}
    getStudentByID(Sid):any {
        return this.studentRepo.findOneBy({Sid});
    }
        getFacultyByID(Fid):any {
            return this.facultyRepo.findOneBy({Fid});
        }
        getFacultysalByID(Fsid):any {
            return this.facultysalRepo.findOneBy({Fsid});
        }
            getOfficerByID(Oid):any {
                return this.officerRepo.findOneBy({Oid});
            }
                getOfficersalByID(Osid):any {
                    return this.officersalRepo.findOneBy({Osid});
                }
                    getCourseByID(Cid):any {
                        return this.courseRepo.findOneBy({ Cid });
                    }

//--insert-----------------------------------------------------------------------------------------------------------
insertAdmin(mydto:AdminForm):any {
    const adminaccount = new AdminEntity()
    adminaccount.name = mydto.name;
    adminaccount.email = mydto.email;
    adminaccount.pass = mydto.pass;
    return this.adminRepo.save(adminaccount);
    }

    insertstudent(mydto:Adminstudent):any {
        const studentaccount = new StudentEntity()
        studentaccount.Sidd = mydto.Sidd;
        studentaccount.Sname = mydto.Sname;
        studentaccount.Sprogram = mydto.Sprogram;
        studentaccount.Sdep = mydto.Sdep;
        studentaccount.Saddress = mydto.Saddress;
        studentaccount.Snum = mydto.Snum;
        studentaccount.Sdob = mydto.Sdob;
        return this.studentRepo.save(studentaccount);
        }

        insertfaculty(mydto:Adminfaculty):any {
            const facultyaccount = new FacultyEntity()
            facultyaccount.Fidd = mydto.Fidd;
            facultyaccount.Fname = mydto.Fname;
            facultyaccount.Fprogram = mydto.Fprogram;
            facultyaccount.Fdep = mydto.Fdep;
            facultyaccount.Faddress = mydto.Faddress;
            facultyaccount.Fnum = mydto.Fnum;
            facultyaccount.Fdob = mydto.Fdob;
            return this.facultyRepo.save(facultyaccount);
            }

            insertofficer(mydto:Adminofficer):any {
                const officeraccount = new OfficerEntity()
                officeraccount.Oidd = mydto.Oidd;
                officeraccount.Oname = mydto.Oname;
                officeraccount.Odep = mydto.Odep;
                officeraccount.Oaddress = mydto.Oaddress;
                officeraccount.Onum = mydto.Onum;
                officeraccount.Odob = mydto.Odob;
                return this.officerRepo.save(officeraccount);
                }

                insertfacultysal(mydto:Adminfacultysal):any {
                    const facultysalaccount = new FacultysalEntity()
                    facultysalaccount.Fsfid = mydto.Fsfid;
                    facultysalaccount.month = mydto.month;
                    facultysalaccount.year = mydto.year;
                    facultysalaccount.amount = mydto.amount;
                    return this.facultysalRepo.save(facultysalaccount);
                    }

                    insertofficersal(mydto:Adminofficersal):any {
                        const officersalaccount = new OfficersalEntity()
                        officersalaccount.Osfid = mydto.Osfid;
                        officersalaccount.month = mydto.month;
                        officersalaccount.year = mydto.year;
                        officersalaccount.amount = mydto.amount;
                        return this.officersalRepo.save(officersalaccount);
                        }

                        insertcourse(mydto:AdminCourse):any {
                            const courseaccount = new CourseEntity()
                            courseaccount.Cname = mydto.Cname;
                            courseaccount.credit = mydto.credit;
                            courseaccount.room = mydto.room;
                            courseaccount.time = mydto.time;
                            return this.courseRepo.save(courseaccount);
                            }

                            insertnotice(mydto:AdminNotice):any {
                                const noticeaccount = new NoticeEntity()
                                noticeaccount.Nsub = mydto.Nsub;
                                noticeaccount.Ndetails = mydto.Ndetails;
                                return this.noticeRepo.save(noticeaccount);
                                }

//---------------------------------------------------------------------------------------------------------
updateAdmin(name,id):any {
        console.log(name+id);
        return this.adminRepo.update(id,{name:name});
    }
        updateStudent(Sid,Sidd,Sname,Sprogram,Sdep,Saddress,Snum,Sdob):any {
            console.log(Sid+Sidd+Sname+Sprogram+Sdep+Saddress+Snum+Sdob);
            return this.studentRepo.update(Sid,{Sidd:Sidd,Sname:Sname,Sprogram:Sprogram,Sdep:Sdep,Saddress:Saddress,Snum:Snum,Sdob:Sdob});
        }
            updateFaculty(Fid,Fidd,Fname,Fprogram,Fdep,Faddress,Fnum,Fdob):any {
                console.log(Fid+Fidd+Fname+Fprogram+Fdep+Faddress+Fnum+Fdob);
                return this.facultyRepo.update(Fid,{Fidd:Fidd,Fname:Fname,Fprogram:Fprogram,Fdep:Fdep,Faddress:Faddress,Fnum:Fnum,Fdob:Fdob});
            }
                updateOfficer(Oid, Oidd,Oname,Odep,Oaddress,Onum,Odob):any {
                    console.log(Oid+ Oidd+Oname+Odep+Oaddress+Onum+Odob);
                    return this.officerRepo.update(Oid,{Oidd:Oidd,Oname:Oname,Odep:Odep,Oaddress:Oaddress,Onum:Onum,Odob:Odob});
                }
                    updateFacultysal(Fsid, Fsfid,month,year,amount):any {
                        console.log(Fsid+Fsfid+month+year+amount);
                        return this.facultysalRepo.update(Fsid,{Fsfid:Fsfid,month:month,year:year,amount:amount});
                    }
                        updateOfficersal(Osid, Osfid,month,year,amount):any {
                            console.log(Osid+Osfid+month+year+amount);
                            return this.officersalRepo.update(Osid,{Osfid:Osfid,month:month,year:year,amount:amount});
                        }
                            updateCourse(Cid, Cname,credit,room,time):any {
                                console.log(Cid+Cname+credit+room+time);
                                return this.courseRepo.update(Cid,{Cname:Cname,credit:credit,room:room,time:time});
                            }
                                updateNotice(Nid,Nsub, Ndetails):any {
                                    console.log(Nid+Nsub+Ndetails);
                                    return this.noticeRepo.update(Nid,{Nsub:Nsub,Ndetails:Ndetails});
                                }
// update --------------------------------------------------------------------------------------------------
//-delete-----------------------------------------------------
deleteStudentbyid(Sid):any {
    return this.studentRepo.delete(Sid);
}
    deleteFacultybyid(Fid):any {
        return this.facultyRepo.delete(Fid);
    }
        deleteOfficerbyid(Oid):any {
            return this.officerRepo.delete(Oid);
        }
            deleteFacultysalbyid(Fsid):any {
                return this.facultysalRepo.delete(Fsid);
            }
                deleteOfficersalbyid(Osid):any {
                    return this.officersalRepo.delete(Osid);
                }
                    deleteCoursebyid(Cid):any {
                        return this.courseRepo.delete(Cid);
                    }
                        deleteNoticebyid(Nid):any {
                            return this.noticeRepo.delete(Nid);
                        }
                
//---------------------------------------------------------------

updateAdminbyid(mydto:AdminForm,id):any {
    return this.adminRepo.update(id,mydto);
    }

    updateStudentid(mydto:Adminstudent,Sid):any {
        return this.studentRepo.update(Sid,mydto);
        }

    deleteAdminbyid(id):any {
        return this.adminRepo.delete(id);
    }
    PatchNoticebyid(Nid,details):any {
        console.log(Nid+details);
        return this.noticeRepo.update(Nid,{Ndetails:details});
    }

    updateGradebyid(Sname,Sid):any {
        return "Update Grade where id " +Sid+" and change name to " +Sname;
    }

}