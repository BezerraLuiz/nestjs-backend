import { AppService } from './app.service';
import { CreateAlunoDto } from './dto/create-aluno.dto';
import { Aluno } from './entities/alunos.entity';
import { UpdateAlunoDto } from './dto/update-aluno.dto';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    findAll(): Aluno[];
    findOne(id: number): Aluno;
    create(body: CreateAlunoDto): Aluno;
    update(id: number, body: UpdateAlunoDto): Aluno;
    remove(id: number): string;
}
