import { IsNotEmpty, IsEmail, Length, Matches } from "class-validator";
export class LoginForm {   
 
    @IsNotEmpty({message: "Please enter your email"})
    @IsEmail({},{message: "Please enter valid email"})
    @Matches(/^[0-9]{2}-[0-9]{5}-[1-3]{1}@student.aiub.edu$/,{message: "Please enter valid email"})
    email: string;

    @IsNotEmpty({message: "Please enter your email"})
    @Length(8, 20, {message: "Password must be between 8 and 20 characters"})
    password: string;
}