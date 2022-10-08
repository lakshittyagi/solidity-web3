const Web3 = require("web3");

const web3 = new Web3("http://127.0.0.1:7545");

const contractAddress = `0x1Ac808167Da129F1B4163D796439f4420b4a3f8e`;

const abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "lakshit",
    outputs: [
      {
        internalType: "uint256",
        name: "rollNumber",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "email",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "class",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "age",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
];

async function accounts() {
  try {
    const accounts = await web3.eth.getAccounts();
    return accounts;
  } catch (err) {
    console.error(err);
  }
}

async function contract() {
  try {
    const contract = await new web3.eth.Contract(abi, contractAddress);
    let data = await contract.methods.lakshit().call();
    console.log("contract", data);
  } catch (error) {
    console.error(error);
  }
}

async function runCode() {
  console.log(await accounts());
}

contract();
