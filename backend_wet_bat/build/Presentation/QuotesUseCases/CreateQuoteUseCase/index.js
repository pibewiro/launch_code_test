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
exports.CreateQuoteUseCase = void 0;
class CreateQuoteUseCase {
    constructor(repository) {
        this._repository = repository;
    }
    execute(values) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield this._repository.create({
                departure_location: values.departureLocation,
                destination_location: values.destinationLocation,
                depart_date: values.departDate,
                return_date: values.destinationLocation,
                number_travellers: Number(values.numberTravellers),
                active: values.active,
                transportation: values.transportation,
                contact_id: values.contactId,
                price: 1000.0,
                status: "Pending",
            });
            return data;
        });
    }
}
exports.CreateQuoteUseCase = CreateQuoteUseCase;
