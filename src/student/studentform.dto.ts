import { IsNotEmpty, IsEmail, IsInt, Length, Matches,IsOptional, IsPhoneNumber, IsString, MaxLength, MinLength } from "class-validator";

export class StudentForm {  

    // @IsNotEmpty({message: "Please enter your id"})
    // id: number;

    @IsNotEmpty({message: "Please enter your name"})
    @IsString({message: "Please enter valid name"})
    name: string;

    @IsOptional()
    CGPA: number;
    @IsNotEmpty({message: "Please enter your semester"})
    @IsInt({message: "Please enter valid semester"})
    semester: number;

    @IsNotEmpty({message: "Please enter your department"})
    department: string;

    // @IsNotEmpty({message: "Please enter your faculty feedback"})
    // @MinLength(10, {message: "Feedback must be between 10 characters"})
    // facultyFeedback: string;

    @IsNotEmpty({message: "Please enter your email"})
    @Matches(/^[0-9]{2}-[0-9]{5}-[1-3]{1}$/,{message: "Please enter valid id"})
    studentId: string;
    @IsNotEmpty({message: "Please enter your address"})
    address: string;
    @IsNotEmpty({message: "Please enter your phone"})
    @IsPhoneNumber("BD", {message: "Please enter valid phone number"})
    phone: string;
    // @IsNotEmpty({message: "Please enter your course"})
    // course: string;
    // @IsNotEmpty({message: "Please enter your section"})
    // @MaxLength(1, {message: "Please enter valid section"})
    // @Matches(/^[a-zA-Z]/,{message: "Please enter valid section"})
    // section: string;
    // @IsNotEmpty({message: "Please enter your faculty"})
    // faculty: string;
    
   
}
export class LoginStudentForm {   
 
    @IsNotEmpty({message: "Please enter your email"})
    @IsEmail({},{message: "Please enter valid email"})
    @Matches(/^[0-9]{2}-[0-9]{5}-[1-3]{1}@student.aiub.edu$/,{message: "Please enter valid email"})
    email: string;

    @IsNotEmpty({message: "Please enter your email"})
    @Length(8, 20, {message: "Password must be between 8 and 20 characters"})
    password: string;
}
export class UpdateStudentform {
    @IsNotEmpty({message: "Please enter your address"})
    address: string;
    @IsNotEmpty({message: "Please enter your phone"})
    @IsPhoneNumber("BD", {message: "Please enter valid phone number"})
    phone: string;
    // @IsNotEmpty({message: "Please enter your course"})
    // course: string;
    // @IsNotEmpty({message: "Please enter your section"})
    // @MaxLength(1, {message: "Please enter valid section"})
    // @Matches(/^[a-zA-Z]/,{message: "Please enter valid section"})
    // section: string;
    // @IsNotEmpty({message: "Please enter your faculty"})
    // faculty: string;
}