import { IsAlpha, IsInt, IsLowercase, IsNotEmpty } from "class-validator";

export class NoticeDto {
  id: number;
  @IsNotEmpty()
  @IsInt({ message: 'ID must be a number' })
  facultyId: number;

  @IsNotEmpty()
  @IsAlpha()
  @IsLowercase({ message: 'Name must be lowercase' })
  subject: string;

  @IsNotEmpty()
  Details: string;
}