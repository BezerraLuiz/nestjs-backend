"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
let AppService = class AppService {
    constructor() {
        this.lastId = 0;
        this.alunos = [];
    }
    findAll() {
        return this.alunos;
    }
    findOne(id) {
        const indexAluno = this.alunos.findIndex((aluno) => aluno.id == id);
        if (indexAluno < 0) {
            throw new common_1.HttpException('Aluno não registrado', 404);
        }
        const aluno = this.alunos[indexAluno];
        return aluno;
    }
    create(body) {
        this.lastId++;
        const id = this.lastId;
        const aluno = {
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
    update(id, body) {
        const indexAluno = this.alunos.findIndex((aluno) => aluno.id == id);
        if (indexAluno < 0) {
            throw new common_1.HttpException('Aluno não registrado', 404);
        }
        const aluno = this.alunos[indexAluno];
        let n1;
        let n2;
        let n3;
        n1 = body.n1 > 0 ? body.n1 : aluno.n1;
        n2 = body.n2 > 0 ? body.n2 : aluno.n2;
        n3 = body.n3 > 0 ? body.n3 : aluno.n3;
        const media = (n1 + n2 + n3) / 3;
        let status;
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
    delete(id) {
        const indexAluno = this.alunos.findIndex((aluno) => aluno.id == id);
        if (indexAluno < 0) {
            throw new common_1.HttpException('Aluno não registrado', 404);
        }
        this.alunos.splice(indexAluno, 1);
        return `Removido aluno com id ${id}`;
    }
};
exports.AppService = AppService;
exports.AppService = AppService = __decorate([
    (0, common_1.Injectable)()
], AppService);
//# sourceMappingURL=app.service.js.map