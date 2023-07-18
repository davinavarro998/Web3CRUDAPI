require("dotenv").config();
const HDWalletProvider = require("@truffle/hdwallet-provider/dist");
const {  Web3 } = require("web3");



//enviroment variables config
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const FANTOM_TESTNET_RPC =
  process.env.FANTOM_TESTNET_RPC || "https://rpc.testnet.fantom.network/";
const AUTHORIZATION_TOKEN = process.env.AUTHORIZATION_TOKEN;
const NETWORK_ID = 4002;
//smart contract ABI and ADDRESS
const ADDRESS = require("../build/contracts/Crud.json").networks[NETWORK_ID].address;
const ABI = require("../build/contracts/Crud.json").abi;


//Web3 config
const provider = new HDWalletProvider(PRIVATE_KEY, FANTOM_TESTNET_RPC);
const web3 = new Web3(provider);
const account = web3.eth.accounts.privateKeyToAccount("0x" + PRIVATE_KEY);
const crudSmartContract = new web3.eth.Contract(ABI, ADDRESS);

module.exports = {
  provider,
  PRIVATE_KEY,
  ADDRESS,
  ABI,
  account,
  crudSmartContract,
  AUTHORIZATION_TOKEN,
};