"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
require("dotenv/config");
const typeorm_1 = require("typeorm");
const contact_1 = require("../../Entities/contact");
const quote_1 = require("../../Entities/quote");
const AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    port: +process.env.DATABASE_PORT,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    host: process.env.DATABASE_HOST,
    synchronize: false,
    logging: false,
    entities: [contact_1.Contacts, quote_1.Quotes],
    migrations: ["./src/Migrations/*.{ts,js}"],
});
exports.AppDataSource = AppDataSource;
