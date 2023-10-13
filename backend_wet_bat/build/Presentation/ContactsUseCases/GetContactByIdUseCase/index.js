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
exports.GetContactByIdUseCase = void 0;
class GetContactByIdUseCase {
    constructor(repository) {
        this._repository = repository;
    }
    execute(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield this._repository.getContactById(id);
            const mappedData = {
                firstName: data.first_name,
                lastName: data.last_name,
                address: data.address,
                city: data.city,
                state: data.state,
                zipCode: data.zip_code,
                phoneNumber: data.phone_number,
                email: data.email,
                id: data._id,
            };
            return mappedData;
        });
    }
}
exports.GetContactByIdUseCase = GetContactByIdUseCase;
