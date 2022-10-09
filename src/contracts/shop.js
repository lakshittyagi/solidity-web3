const web3 = require("../connect");
const contractAddress = `0x51695D7Ddc2819B41ED3DA534b734cF25087FFd7`;
const abi = require("../abi/shop.abi");

async function accounts() {
  try {
    const accounts = await web3.eth.getAccounts();
    console.log("accounts", accounts);
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

// contract();
accounts();
