const carsAbi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    name: "cars",
    outputs: [
      {
        internalType: "uint256",
        name: "number",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "model",
        type: "string",
      },
      {
        internalType: "string",
        name: "brand",
        type: "string",
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
        name: "carholder",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "number",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "model",
        type: "string",
      },
      {
        internalType: "string",
        name: "brand",
        type: "string",
      },
    ],
    name: "addNewCars",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
module.exports = carsAbi;
