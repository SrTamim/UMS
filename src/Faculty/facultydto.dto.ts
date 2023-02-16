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
  @Matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d$@$!%*?&#]{6,}$/) //pa1234,pa#123,pa@123,pa1234
  password: string;

  //@Equals(passward,{ message: 'Password confirmation does not match password' })
  //conformPassword: string;
}
