const express = require("express");
const {isAuthorized } = require("../../middlewares/authorization-token");

const addMessage = require("../../controllers/v1/add-message");

const routerAddMessageV1 = express.Router();

routerAddMessageV1.post("/", isAuthorized, addMessage);

module.exports = { routerAddMessageV1: routerAddMessageV1 };
