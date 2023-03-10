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

     export class RegFrom {   
        @IsNotEmpty() 
        @IsInt()
        @Min(1)
        @Max(1000)
        id: number;
    
        @IsNotEmpty()
        @Length(3,8)
        @IsAlpha()
        name: string;

        email:string;
        pass: string;
        }