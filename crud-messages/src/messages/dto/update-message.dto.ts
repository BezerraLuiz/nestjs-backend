import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdateMessageDto {
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  readonly text: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  readonly from: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  readonly to: string;
}
