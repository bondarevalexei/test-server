import { IsArray, IsEmail, IsString } from 'class-validator';

export class UpdateUserDto {
  @IsEmail()
  email: string;

  @IsString()
  name: string;

  @IsString()
  tag: string;

  @IsArray()
  friends: string[];
}
