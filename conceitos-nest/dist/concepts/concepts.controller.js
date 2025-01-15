"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConceptsController = void 0;
const common_1 = require("@nestjs/common");
const concepts_service_1 = require("./concepts.service");
let ConceptsController = class ConceptsController {
    constructor(conceptsService) {
        this.conceptsService = conceptsService;
    }
    getConcepts() {
        return this.conceptsService.getConcepts();
    }
};
exports.ConceptsController = ConceptsController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], ConceptsController.prototype, "getConcepts", null);
exports.ConceptsController = ConceptsController = __decorate([
    (0, common_1.Controller)('concepts'),
    __metadata("design:paramtypes", [concepts_service_1.ConceptsService])
], ConceptsController);
//# sourceMappingURL=concepts.controller.js.map