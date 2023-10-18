"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpServer = void 0;
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const path_1 = __importDefault(require("path"));
const Routes_1 = require("../../Routes");
const YAML = require("yamljs");
class HttpServer {
    constructor() {
        this.app = (0, express_1.default)();
        this.middlewares();
        this.defaultHeaders();
        this.routes();
        this.swaggerInit();
        console.log("Connected to Http Server");
    }
    swaggerInit() {
        const swaggerDocument = YAML.load(`${path_1.default.resolve()}/src/Configs/swagger.yaml`);
        this.app.use("/api-docs", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerDocument));
    }
    routes() {
        this.app.use("/api", Routes_1.router);
    }
    middlewares() {
        this.app.use(express_1.default.json());
        this.app.use((0, cors_1.default)());
        this.app.use((0, morgan_1.default)("dev"));
    }
    defaultHeaders() {
        this.app.use((req, res, next) => {
            res.setHeader("Access-Control-Allow-Origin", "*");
            res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, OPTIONS");
            next();
        });
    }
}
exports.HttpServer = HttpServer;
exports.default = new HttpServer().app;
