"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
require("dotenv/config");
require("./Infra/Database");
const HttpServer_1 = __importDefault(require("./Infra/HttpServer"));
const PORT = process.env.API_PORT;
HttpServer_1.default.listen(PORT, () => console.log("Connected to port 4000"));
