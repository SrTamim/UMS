import {
    IsInt,
    Length,
    Min,
    Max,
    IsNotEmpty,
    IsPositive,
    IsAlpha,
    IsAlphanumeric,
     } from "class-validator";

export class AdminForm {   
    @IsNotEmpty() 
    @IsInt()
    @Min(1)
    @Max(1000)
    id: number;

    @IsNotEmpty()
    @Length(3,8)
    @IsAlpha()
    name: string;
    }

    export class AdminCourse {  
        Cname: string;
        credit: string;
        room: string;
        time: string;
    }

    export class AdminRoom {  
    @IsNotEmpty()
    @IsAlphanumeric()
    Rid: number;
    @IsNotEmpty()
    @IsAlphanumeric()
    Rname: string;
    }

    export class AdminNotice {  
    @IsNotEmpty()
    @IsInt()
    @IsPositive()
    Nid: number;
    @IsNotEmpty()
    Ndetails: string;
    Nsub: string;
    }

    export class Adminstudent{

        Sidd: string;

        Sname: string;

        Sprogram: string;

        Sdep: string;

        Saddress: string;

        Snum: string;

        Sdob: string;
    }

    export class Adminfaculty{
        Fidd: string;

        Fname: string;

        Fprogram: string;

        Fdep: string;

        Faddress: string;

        Fnum: string;
 
        dob: string;

        Fsal: string;
    }

    export class Adminofficer{
        Oidd: number;

        Oname: string;

        Odep: string;

        Oaddress: string;

        Onum: string;

        Odob: string;

        Osal: string;
    }

    export class Adminfacultysal{
        id: number; //(primary key)
        teacher_id: number; //(foreign key referencing teacher table)
        month: string;
        year: string;
        amount: string;
    }
    export class Adminofficersal{
        id: number; //(primary key)
        teacher_id: number; //(foreign key referencing teacher table)
        month: string;
        year: string;
        amount: string;
    }