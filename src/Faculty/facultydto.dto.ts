import { IsInt, IsNotEmpty, Length } from 'class-validator';

export class FacultyDto {
  @IsNotEmpty({ message: 'Name is required' })
  @Length(5, 50)
  Uname: string;

  @IsNotEmpty({ message: 'University ID is required' })
  @IsInt()
  universityId: number;
}
