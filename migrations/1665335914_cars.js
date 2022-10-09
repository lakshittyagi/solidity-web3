var CarContract = artifacts.require("../contracts/Car");
module.exports = function (deployer) {
  deployer.deploy(CarContract);
};
