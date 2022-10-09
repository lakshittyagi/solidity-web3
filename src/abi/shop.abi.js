const shopAbi = [
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
module.exports = shopAbi;
