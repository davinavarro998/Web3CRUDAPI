

const { crudSmartContract } = require("../../config");




const readMessages = async (req, res) => {

    try {
        const result = await crudSmartContract.methods.readMessages().call();
        const jsonResult = [];
        for (let i = 0; i < result.length; i++) {
          const messageShape = {
            id:Number(result[i].id),
            content:result[i].content,
            timestamp:Number(result[i].timestamp),
            isVerified:result[i].isVerified
          };
          jsonResult.push(messageShape);
        }
        console.log(jsonResult);
        res.status(200).json(jsonResult);

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
