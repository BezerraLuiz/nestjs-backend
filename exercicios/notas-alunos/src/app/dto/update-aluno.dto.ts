import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateAlunoDto {
  @IsNotEmpty()
  @IsString()
  @IsOptional()
  readonly nome?: string;

  @IsNotEmpty()
  @IsNumber()
  @IsOptional()
  readonly idade?: number;

  @IsNotEmpty()
  @IsString()
  @IsOptional()
  readonly curso?: string;

  @IsNotEmpty()
  @IsNumber()
  @IsOptional()
  readonly n1?: number;

  @IsNotEmpty()
  @IsNumber()
  @IsOptional()
  readonly n2?: number;

  @IsNotEmpty()
  @IsNumber()
  @IsOptional()
  readonly n3?: number;
}
