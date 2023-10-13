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
exports.QuoteRepository = void 0;
const connection_1 = require("../../Infra/Database/connection");
const quote_1 = require("../../Entities/quote");
class QuoteRepository {
    constructor() {
        this.repository = connection_1.AppDataSource.getRepository(quote_1.Quotes);
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const quoteData = yield this.repository.find({
                    relations: ["contacts"],
                });
                return quoteData;
            }
            catch (error) {
                console.log("error");
                throw error;
            }
        });
    }
    getQuoteById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const quoteData = yield this.repository.findOne({
                    where: { _id: id },
                    relations: ["contacts"],
                });
                return quoteData;
            }
            catch (error) {
                console.log(error);
                throw error;
            }
        });
    }
    deleteQuote(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const quoteData = yield this.repository.findOneBy({ active: false });
                return quoteData;
            }
            catch (error) {
                console.log(error);
                throw error;
            }
        });
    }
    updateQuote(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.repository.update(data._id, data);
                return true;
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
                const createdQuote = this.repository.create(values);
                const newQuote = yield this.repository.save(createdQuote);
                return newQuote;
            }
            catch (error) {
                console.log(error);
                throw error;
            }
        });
    }
}
exports.QuoteRepository = QuoteRepository;
