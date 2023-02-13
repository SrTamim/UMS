import {
  Equals,
  IsAlpha,
  IsEmail,
  IsInt,
  IsLowercase,
  IsNotEmpty,
  IsPhoneNumber,
  Length,
  Matches,
} from 'class-validator';

export class FacultyDto {
  @IsNotEmpty({ message: 'Name is required' })
  @IsLowercase({ message: 'Name must be lowercase' })
  @Matches(/^[A-Za-z][A-Za-z0-9_]{7,29}$/)
  Uname: string;

  @IsNotEmpty()
  @IsAlpha()
  name: string;

  @IsNotEmpty()
  @IsInt({ message: 'ID must be a number' })
  universityId: number;

  @IsPhoneNumber('BD', { message: 'Phone number is not valid' })
  phone: number;
}

export class LoginDto {
  @IsNotEmpty()
  @IsEmail({}, { message: 'Email is not valid' })
  email: string;

  @IsNotEmpty()
  @Length(3, 8, { message: 'Password must be between 3 and 8 characters' })
  //@Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,50}$/)
  password: string;

  //@Equals(passward,{ message: 'Password confirmation does not match password' })
  //conformPassword: string;
}

