import { IsNotEmpty, IsEmail, IsInt, Length, Matches,IsOptional, IsPhoneNumber, IsString, MaxLength, MinLength, isNotEmpty, IsNumber } from "class-validator";

export class GradeForm {  

    @IsNotEmpty({message: "Please enter your year"})
    @IsNumber({}, {message: "Please enter valid year"})
    year: number;

    @IsNotEmpty({message: "Please enter exam name"})
    xm: string;

    @IsNotEmpty({message: "Please enter grade"})
    grade: string;
   
}