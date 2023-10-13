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
exports.GetQuoteUseCase = void 0;
class GetQuoteUseCase {
    constructor(repository) {
        this._repository = repository;
    }
    execute(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield this._repository.getQuoteById(id);
            const mappedData = {
                createdAt: data.created_at.toString(),
                departureLocation: data.departure_location,
                destinationLocation: data.destination_location,
                departDate: data.depart_date,
                returnDate: data.return_date,
                numberTravellers: data.number_travellers,
                status: data.status,
                active: data.active,
                contactId: data.contact_id,
                transportation: data.transportation,
                id: data._id,
                contacts: {
                    firstName: data.contacts.first_name,
                    lastName: data.contacts.last_name,
                    address: data.contacts.address,
                    city: data.contacts.city,
                    state: data.contacts.state,
                    zipCode: data.contacts.zip_code,
                    phoneNumber: data.contacts.phone_number,
                    email: data.contacts.email,
                    id: data.contacts._id,
                },
                price: data.price,
            };
            return mappedData;
        });
    }
}
exports.GetQuoteUseCase = GetQuoteUseCase;
