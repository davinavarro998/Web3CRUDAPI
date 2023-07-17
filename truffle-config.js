//truffle provider
const HDWalletProvider = require("@truffle/hdwallet-provider");

require("dotenv").config();

//Setting up enviromental variables
//fantom testnet public endpoint: https://rpc.testnet.fantom.network/
const FANTOM_TESTNET_RPC = process.env.FANTOM_TESTNET_RPC;


const MNEMONIC = process.env.MNEMONIC;
module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*",
    },
    
    fantomTestnet: {
      provider: () => new HDWalletProvider(MNEMONIC, FANTOM_TESTNET_RPC),
      network_id: 4002,
    },
    
  },

  compilers: {
    solc: {
      version: "0.8.2",
    },
  },
};
