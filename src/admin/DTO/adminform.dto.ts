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
        @IsNotEmpty()
        Sid:number;
        @IsNotEmpty()
        Sidd: number;
        @IsNotEmpty()
        Sname: string;
        @IsNotEmpty()
        Sprogram: string;
        @IsNotEmpty()
        Sdep: string;
        @IsNotEmpty()
        Saddress: string;
        @IsNotEmpty()
        Snum: string;
        @IsNotEmpty()
        Sdob: string;
    }

    export class Adminfaculty{
        @IsNotEmpty()
        Fid: number;
        @IsNotEmpty()
        Fidd: string;
        @IsNotEmpty()
        Fname: string;
        @IsNotEmpty()
        Fprogram: string;
        @IsNotEmpty()
        Fdep: string;
        @IsNotEmpty()
        Faddress: string;
        @IsNotEmpty()
        Fnum: string;
        @IsNotEmpty()
        Fdob: string;

    }

    export class Adminofficer{
        @IsNotEmpty()
        Oidd: number;
        @IsNotEmpty()
        Oname: string;
        @IsNotEmpty()
        Odep: string;
        @IsNotEmpty()
        Oaddress: string;
        @IsNotEmpty()
        Onum: string;
        @IsNotEmpty()
        Odob: string;
    }

    export class Adminfacultysal{
        // Ffid: number; //(primary key)
        @IsNotEmpty()
        Ff_id: number; //(foreign key referencing teacher table)
        @IsNotEmpty()
        month: string;
        @IsNotEmpty()
        year: string;
        @IsNotEmpty()
        amount: string;
    }
    export class Adminofficersal{
        // Ooid: number; //(primary key)
        @IsNotEmpty()
        Of_id: number; //(foreign key referencing teacher table)
        @IsNotEmpty()
        month: string;
        @IsNotEmpty()
        year: string;
        @IsNotEmpty()
        amount: string;
    }