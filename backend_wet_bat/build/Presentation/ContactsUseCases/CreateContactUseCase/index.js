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
exports.CreateContactUseCase = void 0;
class CreateContactUseCase {
    constructor(repository) {
        this._repository = repository;
    }
    execute(values) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield this._repository.create({
                first_name: values.firstName,
                last_name: values.lastName,
                email: values.email,
                address: values.address,
                city: values.city,
                state: values.state,
                phone_number: values.phoneNumber,
                zip_code: values.zipCode,
            });
            return data;
        });
    }
}
exports.CreateContactUseCase = CreateContactUseCase;
