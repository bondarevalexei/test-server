import { IsString } from 'class-validator';

export class UpdateGoodDeedDto {
  @IsString()
  title: string;

  description?: string;
}
