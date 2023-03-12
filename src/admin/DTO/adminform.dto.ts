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
    @IsAlpha()
    name: string;
    @IsNotEmpty() 
    email:string;
    @IsNotEmpty() 
    pass:string;
    @IsNotEmpty() 
    address:string;
    filename:string;
    }

    export class AdminCourse {  
      
        @IsInt()
        Cid:number;
        @IsNotEmpty()
        @IsAlpha()
        Cname: string;
        @IsNotEmpty()
        credit: string;
        @IsNotEmpty()
        room: string;
        @IsNotEmpty()
        time: string;
    }

    export class AdminRoom {  
  
    @IsInt()
    Rid: number;
    @IsNotEmpty()
    @IsAlphanumeric()
    Rname: string;
    }

    export class AdminNotice {  
  
    @IsInt()
    @IsPositive()
    Nid: number;
    @IsNotEmpty()
    @IsAlpha()
    Ndetails: string;
    @IsNotEmpty() 
    @IsAlpha()
    Nsub: string;
    }

    export class Adminstudent{
       
        @IsInt()
        Sid:number;
        @IsNotEmpty()
        @IsInt()
        Sidd: number;
        @IsNotEmpty()
        @IsAlpha()
        Sname: string;
        @IsNotEmpty()
        Sprogram: string;
        @IsNotEmpty()
        @IsAlpha()
        Sdep: string;
        @IsNotEmpty()
        @IsAlphanumeric()
        Saddress: string;
        @IsNotEmpty()
        Snum: string;
        @IsNotEmpty()
        @IsAlphanumeric()
        Sdob: string;
    }

    export class Adminfaculty{
        @IsInt()
        Fid: number;
        @IsNotEmpty()
        Fidd: string;
        @IsNotEmpty()
        @IsAlpha()
        Fname: string;
        @IsNotEmpty()
        @IsAlpha()
        Fprogram: string;
        @IsNotEmpty()
        Fdep: string;
        @IsNotEmpty()
        @IsAlpha()
        @IsAlphanumeric()
        Faddress: string;
        @IsNotEmpty()
        Fnum: string;
        @IsNotEmpty()
        @IsAlphanumeric()
        Fdob: string;


    }

    export class Adminofficer{
        @IsInt()
        Oid: number;
        @IsNotEmpty()
        Oidd: string;
        @IsNotEmpty()
        @IsAlpha()
        Oname: string;
        @IsNotEmpty()
        @IsAlpha()
        Odep: string;
        @IsNotEmpty()
        @IsAlphanumeric()
        Oaddress: string;
        @IsNotEmpty()
        Onum: string;
        @IsNotEmpty()
        @IsAlphanumeric()
        Odob: string;
    }

    export class Adminfacultysal{
        @IsInt()
        Fid: number; 
        @IsNotEmpty()
        @IsAlphanumeric()
        month: string;
        @IsNotEmpty()
        @IsAlphanumeric()
        year: string;
        @IsNotEmpty()
        amount: string;
    }
    export class Adminofficersal{
        @IsInt()
        Osid: number; 
        @IsNotEmpty()
        Osfid: number; 
        @IsNotEmpty()
        @IsAlphanumeric()
        month: string;
        @IsNotEmpty()
        @IsAlphanumeric()
        year: string;
        @IsNotEmpty()
        amount: string;
    }