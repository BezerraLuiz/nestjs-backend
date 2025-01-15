import { Aluno } from './entities/alunos.entity';
import { CreateAlunoDto } from './dto/create-aluno.dto';
import { UpdateAlunoDto } from './dto/update-aluno.dto';
export declare class AppService {
    lastId: number;
    alunos: Aluno[];
    findAll(): Aluno[];
    findOne(id: number): Aluno;
    create(body: CreateAlunoDto): Aluno;
    update(id: number, body: UpdateAlunoDto): Aluno;
    delete(id: number): string;
}
