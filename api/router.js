const express = require("express");
const router = express.Router();


const { routerAddMessageV1 } = require("./routes/v1/add-message");
const { routerReadMessagesV1 } = require("./routes/v1/read-messages");
const { routerDeleteMessageV1 } = require("./routes/v1/delete-message");
//const {metadataRouter} = require("./routes/v1/metadata");
//const {routerBuyNFTV1} = require("./routes/v1/buy-nft");

router.use("/v1/add-message", routerAddMessageV1);

router.use("/v1/read-messages", routerReadMessagesV1);

router.use("/v1/delete-message", routerDeleteMessageV1);

//router.use("/v1/metadata",metadataRouter);

//router.use("/v1/buy-nft", routerBuyNFTV1);

module.exports = {
  router: router,
};