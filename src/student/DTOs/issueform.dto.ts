import { IsNotEmpty, IsEmail, IsInt, Length, Matches,IsOptional, IsPhoneNumber, IsString, MaxLength, MinLength, isNotEmpty, IsNumber } from "class-validator";

export class IssueForm {  

    issueType: string;
    issue: string;
    studentId: number;
   
}
export class UpdateIssueForm {
    issueType: string;
    issue: string;
}