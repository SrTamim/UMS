import { IsNotEmpty,IsOptional } from "class-validator";

export class DropForm {  

    @IsOptional()
    applicationStatus: string = "pending";
    
    @IsNotEmpty({message: "Please enter your reason"})
    reason: string;
}