import { IsNotEmpty, IsEmail, IsInt, Length, Matches,IsOptional, IsPhoneNumber, IsString, MaxLength, MinLength, isNotEmpty, IsNumber } from "class-validator";

export class AssignForm {  

    @IsNotEmpty({message: "Please enter your year"})
    assignmentName: string;
    
    filename: string;
}