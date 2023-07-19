require("dotenv").config();
const HDWalletProvider = require("@truffle/hdwallet-provider/dist");
const {  Web3 } = require("web3");



//enviroment variables config
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const FANTOM_TESTNET_RPC =
  process.env.FANTOM_TESTNET_RPC || "https://rpc.testnet.fantom.network/";
const AUTHORIZATION_TOKEN = process.env.AUTHORIZATION_TOKEN;
//const NETWORK_ID = 4002;
//smart contract ABI and ADDRESS
const ADDRESS = "0x41De28E9582F713C63955B5D1396893A86807B95";
const ABI = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "_content",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_timestamp",
        type: "uint256",
      },
    ],
    name: "MessageAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_timestamp",
        type: "uint256",
      },
    ],
    name: "MessageVerified",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "messages",
    outputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "content",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "isVerified",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [],
    name: "readMessages",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "content",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "timestamp",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "isVerified",
            type: "bool",
          },
        ],
        internalType: "struct Crud.Message[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_content",
        type: "string",
      },
    ],
    name: "addMessage",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
    ],
    name: "verifyMessage",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
    ],
    name: "deleteMessage",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];


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