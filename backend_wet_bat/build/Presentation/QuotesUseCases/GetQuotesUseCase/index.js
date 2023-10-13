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
exports.GetQuotesUseCase = void 0;
class GetQuotesUseCase {
    constructor(repository) {
        this._repository = repository;
    }
    execute() {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield this._repository.getAll();
            const quotesData = data.map((x) => {
                return {
                    departureLocation: x.departure_location,
                    destinationLocation: x.destination_location,
                    departDate: x.depart_date,
                    returnDate: x.return_date,
                    numberTravellers: x.number_travellers,
                    status: x.status,
                    active: x.active,
                    contactId: x.contact_id,
                    transportation: x.transportation,
                    price: x.price,
                    id: x._id,
                    contacts: {
                        firstName: x.contacts.first_name,
                        lastName: x.contacts.last_name,
                        address: x.contacts.address,
                        city: x.contacts.city,
                        state: x.contacts.state,
                        zipCode: x.contacts.zip_code,
                        phoneNumber: x.contacts.phone_number,
                        email: x.contacts.email,
                        id: x.contacts._id,
                    },
                };
            });
            return quotesData;
        });
    }
}
exports.GetQuotesUseCase = GetQuotesUseCase;
