import { IsNotEmpty, IsEmail, IsInt, Length, Matches,IsOptional, IsPhoneNumber, IsString, MaxLength, MinLength, IsDateString } from "class-validator";

export class StudentForm {  

    // @IsNotEmpty({message: "Please enter your id"})
    // id: number;

    @IsNotEmpty({message: "Please enter your name"})
    @IsString({message: "Please enter valid name"})
    Sname: string;

    // @IsOptional()
    // CGPA: number;
    // @IsNotEmpty({message: "Please enter your semester"})
    // @IsInt({message: "Please enter valid semester"})
    // semester: number;

    @IsNotEmpty({message: "Please enter your department"})
    Sdep: string;

    // @IsNotEmpty({message: "Please enter your faculty feedback"})
    // @MinLength(10, {message: "Feedback must be between 10 characters"})
    // facultyFeedback: string;

    @IsNotEmpty({message: "Please enter your email"})
    @Matches(/^[0-9]{2}-[0-9]{5}-[1-3]{1}$/,{message: "Please enter valid id"})
    Sidd: string;
    @IsNotEmpty({message: "Please enter your address"})
    Saddress: string;
    @IsNotEmpty({message: "Please enter your phone"})
    @IsPhoneNumber("BD", {message: "Please enter valid phone number"})
    Snum: string;
    // @IsNotEmpty({message: "Please enter your course"})
    // course: string;
    // @IsNotEmpty({message: "Please enter your section"})
    // @MaxLength(1, {message: "Please enter valid section"})
    // @Matches(/^[a-zA-Z]/,{message: "Please enter valid section"})
    // section: string;
    // @IsNotEmpty({message: "Please enter your faculty"})
    // faculty: string;
    @IsNotEmpty({message: "Please enter your Date of birth"})
    Sdob: string;

    @IsNotEmpty({message: "Please enter your program"})
    Sprogram: string;
   
}

export class UpdateStudentform {
    @IsNotEmpty({message: "Please enter your address"})
    Saddress: string;
    @IsNotEmpty({message: "Please enter your phone"})
    @IsPhoneNumber("BD", {message: "Please enter valid phone number"})
    Snum: string;
}