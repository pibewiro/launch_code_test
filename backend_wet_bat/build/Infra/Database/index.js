"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = require("./connection");
connection_1.AppDataSource.initialize()
    .then(() => {
    console.log("Connected to DB");
})
    .catch((error) => console.log(error));
