import { IsAlpha, IsEmail, IsInt, IsNotEmpty, IsPhoneNumber, Length, Matches } from "class-validator";

export class FacultyInfoDTO {
  /*@IsNotEmpty()
  @IsAlpha()
  name: string;

  @IsNotEmpty()
  @IsInt({ message: 'ID must be a number' })
  universityId: number;

  @IsNotEmpty()
  @IsInt({ message: 'ID must be a number' })
  id: number;

  @IsNotEmpty()
  @Length(3, 8, { message: 'Password must be between 3 and 8 characters' })
  @Matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d$@$!%*?&#]{6,}$/)
  password: string;

  @IsNotEmpty()
  @IsEmail({}, { message: 'Email is not valid' })
  Email: string;

  @IsNotEmpty()
  photo: number;

  @IsNotEmpty()
  @IsPhoneNumber('BD', { message: 'Phone number is not valid' })
  PhoneNumber: number;

  @IsNotEmpty()
  @IsAlpha()
  department: string;

  @IsNotEmpty()
  @IsAlpha()
  Sex: string;
  
  @IsNotEmpty()
  @IsAlpha()
  MaritalStatus: string;

  @IsNotEmpty()
  @IsAlpha()
  BloodGroup: string;

  @IsNotEmpty()
  Nationality: string;

  @IsNotEmpty()
  @IsAlpha()
  PermanentAddress: string;

  @IsNotEmpty()
  DOB: Date;

  @IsNotEmpty()
  BSC: string;

  @IsNotEmpty()
  @IsAlpha()
  MSC: string;

  @IsNotEmpty()
  @IsAlpha()
  SSC: string;

  @IsNotEmpty()
  @IsAlpha()
  HSC: string;*/

  @IsNotEmpty()
  @IsInt({ message: 'ID must be a number' })
  Fid: number;

  @IsNotEmpty()
  @IsInt({ message: 'ID must be a number' })
  Fidd: number;

  @IsNotEmpty()
  @IsAlpha()
  Fname: string;

  @IsNotEmpty()
  @IsAlpha()
  Fprogram: string;

  @IsNotEmpty()
  @IsAlpha()
  Fdep: string;

  @IsNotEmpty()
  @IsAlpha()
  Faddress: string;

  @IsNotEmpty()
  @IsPhoneNumber('BD', { message: 'Phone number is not valid' })
  Fnum: number;

  @IsNotEmpty()
  dob: Date;

  @IsNotEmpty()
  Fsal: number;
}
