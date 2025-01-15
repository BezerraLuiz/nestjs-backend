import { HttpException, Injectable } from '@nestjs/common';
import { Aluno } from './entities/alunos.entity';
import { CreateAlunoDto } from './dto/create-aluno.dto';
import { UpdateAlunoDto } from './dto/update-aluno.dto';

@Injectable()
export class AppService {
  lastId = 0;
  alunos: Aluno[] = [];

  findAll(): Aluno[] {
    return this.alunos;
  }

  findOne(id: number): Aluno {
    const indexAluno = this.alunos.findIndex((aluno) => aluno.id == id);

    if (indexAluno < 0) {
      throw new HttpException('Aluno não registrado', 404);
    }

    const aluno = this.alunos[indexAluno];

    return aluno;
  }

  create(body: CreateAlunoDto): Aluno {
    this.lastId++;
    const id = this.lastId;

    const aluno: Aluno = {
      id,
      ...body,
      n1: 0,
      n2: 0,
      n3: 0,
      media: 0,
      status: 'Neutro',
    };

    this.alunos.push(aluno);

    return aluno;
  }

  update(id: number, body: UpdateAlunoDto): Aluno {
    const indexAluno = this.alunos.findIndex((aluno) => aluno.id == id);

    if (indexAluno < 0) {
      throw new HttpException('Aluno não registrado', 404);
    }

    const aluno = this.alunos[indexAluno];

    let n1: number;
    let n2: number;
    let n3: number;

    n1 = body.n1 > 0 ? body.n1 : aluno.n1;
    n2 = body.n2 > 0 ? body.n2 : aluno.n2;
    n3 = body.n3 > 0 ? body.n3 : aluno.n3;

    const media: number = (n1 + n2 + n3) / 3;

    let status: string;

    status = media >= 6 ? 'Aprovado' : 'Reprovado';

    return (this.alunos[indexAluno] = {
      ...aluno,
      ...body,
      n1,
      n2,
      n3,
      media,
      status,
    });
  }

  delete(id: number): string {
    const indexAluno = this.alunos.findIndex((aluno) => aluno.id == id);

    if (indexAluno < 0) {
      throw new HttpException('Aluno não registrado', 404);
    }

    this.alunos.splice(indexAluno, 1);

    return `Removido aluno com id ${id}`;
  }
}
