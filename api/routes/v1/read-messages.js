const express = require("express");
const {readMessages} = require("../../controllers/v1/read-messages");

const routerReadMessagesV1 = express.Router();

routerReadMessagesV1.get("/", readMessages);

module.exports = {
    routerReadMessagesV1: routerReadMessagesV1,
};
