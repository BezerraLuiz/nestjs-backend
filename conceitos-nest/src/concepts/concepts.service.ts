import { Injectable } from '@nestjs/common';

@Injectable()
export class ConceptsService {
  getConcepts() {
    return 'Service Concepts';
  }
}
