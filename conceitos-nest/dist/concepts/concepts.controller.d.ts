import { ConceptsService } from './concepts.service';
export declare class ConceptsController {
    private readonly conceptsService;
    constructor(conceptsService: ConceptsService);
    getConcepts(): string;
}
