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
    @IsNotEmpty({message: "Please enter id"}) 
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
    @IsNotEmpty()
    @IsInt()
    @IsPositive()
	Cid: number;
    @IsNotEmpty()
    @IsAlphanumeric()
    Cname: string;
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
    }