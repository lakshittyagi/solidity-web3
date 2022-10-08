var ShopContract = artifacts.require("../contracts/Shop");

module.exports = function (deployer) {
  // deployment steps
  deployer.deploy(ShopContract);
};
