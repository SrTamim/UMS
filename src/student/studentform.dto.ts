import { IsInt, IsNotEmpty, Length } from "class-validator";

export class StudentForm {   
    @IsNotEmpty({message: "Please enter your id"}) 
    @IsInt()
    id: number;

    @IsNotEmpty()
    @Length(3,8)
    name: string;



}