import { IsString, MaxLength } from 'class-validator';

export class UpdateMessageDto {
  @IsString()
  @MaxLength(255)
  readonly text?: string;

  @IsString()
  readonly from?: string;

  @IsString()
  readonly to?: string;
}
