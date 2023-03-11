import { IsNotEmpty, IsEmail, IsInt, Length, Matches,IsOptional, IsPhoneNumber, IsString, MaxLength, MinLength, isNotEmpty, IsNumber } from "class-validator";

export class facfeedbackform {  

  
    @IsOptional()
    feedback: string;
   
}