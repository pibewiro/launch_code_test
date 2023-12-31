"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getQuoteController = exports.quoteRepository = exports.getQuoteUseCase = void 0;
const GetQuoteController_1 = require("../../../Controllers/QuoteControllers/GetQuoteController");
const GetQuoteUseCase_1 = require("../../../Presentation/QuotesUseCases/GetQuoteUseCase");
const quote_1 = require("../../../Repositories/quote");
const quoteRepository = new quote_1.QuoteRepository();
exports.quoteRepository = quoteRepository;
const getQuoteUseCase = new GetQuoteUseCase_1.GetQuoteUseCase(quoteRepository);
exports.getQuoteUseCase = getQuoteUseCase;
const getQuoteController = new GetQuoteController_1.GetQuoteController(getQuoteUseCase);
exports.getQuoteController = getQuoteController;
