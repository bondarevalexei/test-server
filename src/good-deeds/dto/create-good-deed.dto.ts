import { IsInt, IsString } from 'class-validator';

export class CreateGoodDeedDto {
  @IsInt()
  userId: number;

  @IsString()
  title: string;

  @IsString()
  description?: string;
}
