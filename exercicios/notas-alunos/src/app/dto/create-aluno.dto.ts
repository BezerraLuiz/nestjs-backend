import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateAlunoDto {
  @IsNotEmpty()
  @IsString()
  readonly nome: string;

  @IsNotEmpty()
  @IsNumber()
  readonly idade: number;

  @IsNotEmpty()
  @IsString()
  readonly curso: string;
}
