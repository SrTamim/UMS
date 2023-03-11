import { IsNotEmpty, IsEmail, IsInt, Length, Matches,IsOptional, IsPhoneNumber, IsString, MaxLength, MinLength, isNotEmpty, IsNumber } from "class-validator";

export class DropForm {  

    @IsNotEmpty({message: "Please enter your year"})
    applicationStatus: string;
    
    @IsOptional()
    reason: string;
}