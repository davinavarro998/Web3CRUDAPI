require("dotenv").config();

const { crudSmartContract, account } = require("../../config");

const deleteMessage = async (req, res) => {
  //const artJson = JSON.stringify(req.body);
  const { id } = req.body;

  try {
    const receipt = await crudSmartContract.methods
      .deleteMessage(id)
      .send({ from: account.address });

    if (receipt) {
      res.status(200).json({
        message: "Message is deleted",
        success: true,
      });
    }
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ success: false, reason: "There is something wrong with server" });
  }
};

module.exports = deleteMessage;
