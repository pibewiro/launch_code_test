"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactRouter = void 0;
const express_1 = require("express");
const CreateContact_1 = require("../Containers/Contact/CreateContact");
const GetContactById_1 = require("../Containers/Contact/GetContactById");
const ContactRouter = (0, express_1.Router)();
exports.ContactRouter = ContactRouter;
ContactRouter.post("/", (req, res) => CreateContact_1.createContactController.handle(req, res));
ContactRouter.get("/:id", (req, res) => GetContactById_1.getContactByIdController.handle(req, res));
