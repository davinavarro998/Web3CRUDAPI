const express = require("express");
const { isAuthorized } = require("../../middlewares/authorization-token");

const deleteMessage = require("../../controllers/v1/delete-message");

const routerDeleteMessageV1 = express.Router();

routerDeleteMessageV1.post("/", isAuthorized, deleteMessage);

module.exports = { routerDeleteMessageV1: routerDeleteMessageV1 };
