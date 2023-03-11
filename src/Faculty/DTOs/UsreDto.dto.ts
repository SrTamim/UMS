import { IsAlpha, IsEmail, IsNotEmpty } from 'class-validator';

export class UserDto {
  Uid: number;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;
}
