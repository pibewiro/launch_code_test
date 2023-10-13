"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateContactController = void 0;
class CreateContactController {
    constructor(createContactUseCase) {
        this._createContactUseCase = createContactUseCase;
    }
    handle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield this._createContactUseCase.execute(request.body);
            return response.status(201).json(data);
        });
    }
}
exports.CreateContactController = CreateContactController;
