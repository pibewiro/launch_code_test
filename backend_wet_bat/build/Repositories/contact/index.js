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
exports.ContactRepository = void 0;
const connection_1 = require("../../Infra/Database/connection");
const contact_1 = require("../../Entities/contact");
class ContactRepository {
    constructor() {
        this.repository = connection_1.AppDataSource.getRepository(contact_1.Contacts);
    }
    getContactById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield this.repository.findOneBy({ _id: id });
                return data;
            }
            catch (error) {
                console.log(error);
                throw error;
            }
        });
    }
    create(values) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const createdContact = this.repository.create(values);
                const newContact = yield this.repository.save(createdContact);
                return newContact;
            }
            catch (error) {
                console.log(error);
                throw error;
            }
        });
    }
}
exports.ContactRepository = ContactRepository;
