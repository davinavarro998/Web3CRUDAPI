require("dotenv").config();


const { crudSmartContract, account} = require("../../config");


const addMessage = async (req, res) => {
    //const artJson = JSON.stringify(req.body);
    const { content } = req.body;

    try {
        const receipt = await crudSmartContract.methods.addMessage(content).send({from: account.address,
        });
        
        if(receipt){
            res.status(200).json({
                message: content,
                success: true,
            });   
        }

    } catch (error) {
        console.error(error);
        res.status(500).json({success:false, reason:"There is something wrong with server"});
    }
};

module.exports = addMessage;
