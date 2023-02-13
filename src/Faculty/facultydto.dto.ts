import {
  IsAlpha,
  IsAlphanumeric,
  IsEmail,
  IsInt,
  IsNotEmpty,
  IsPhoneNumber,
  Length,
  Matches,
} from 'class-validator';


export class FacultyDto {
  @IsNotEmpty({ message: 'Name is required' })
  @IsAlphanumeric()
  Uname: string;

  @IsNotEmpty()
  @IsAlpha()
  @Matches(/^[a-zA-Z.]*$/, { message: 'Name is not valid' })
  name: string;

  @IsNotEmpty()
  @IsInt({ message: 'ID must be a number' })
  universityId: number;

  @IsPhoneNumber('BD', { message: 'Phone number is not valid' })
  phone: number;
}

export class LoginDto {
  @IsEmail({}, { message: 'Email is not valid' })
  email: string;

  @Length(3, 8, { message: 'Password must be between 3 and 8 characters' })
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,50}$/)
  password: string;
}
