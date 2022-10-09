const web3 = require("../connect");
const contractAddress = `0x595Fd28F60C25d9ADc6dd37530E043d9AafcB487`;
const abi = require("../abi/cars.abi");

async function cars() {
  try {
    const contract = await new web3.eth.Contract(abi, contractAddress);
    let data = await contract.methods.cars("akshay").call();
    console.log("contract", data);
  } catch (err) {
    console.error(err);
  }
}

async function addNewCars() {
  try {
    const contract = await new web3.eth.Contract(abi, contractAddress);
    let data = await contract.methods
      .addNewCars("akshay", 1234, "new model", "new brand")
      .send({
        from: "0x2e7DC4F7D811A5cc17D3415a0E896632bA126526",
        gas: 3000000,
      });
    console.log("contract", data);
  } catch (error) {
    console.error(error);
  }
}

// addNewCars();
cars();
