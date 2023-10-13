"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createQuoteController = exports.quoteRepository = exports.createQuoteUseCase = void 0;
const CreateQuoteController_1 = require("../../../Controllers/QuoteControllers/CreateQuoteController");
const CreateQuoteUseCase_1 = require("../../../Presentation/QuotesUseCases/CreateQuoteUseCase");
const quote_1 = require("../../../Repositories/quote");
const quoteRepository = new quote_1.QuoteRepository();
exports.quoteRepository = quoteRepository;
const createQuoteUseCase = new CreateQuoteUseCase_1.CreateQuoteUseCase(quoteRepository);
exports.createQuoteUseCase = createQuoteUseCase;
const createQuoteController = new CreateQuoteController_1.CreateQuoteController(createQuoteUseCase);
exports.createQuoteController = createQuoteController;
