

const { crudSmartContract } = require("../../config");




const readMessages = async (req, res) => {

    try {
        const result = await crudSmartContract.methods.readMessages().call();
        res.status(200).json({ message: result.toString()});

    } catch (error) {
        console.error(error);
        res
          .status(500)
          .json({
            success: false,
            reason: "There is something wrong with server",
          });
    }
};

module.exports = {readMessages:readMessages};
