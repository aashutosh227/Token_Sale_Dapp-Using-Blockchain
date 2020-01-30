const DappToken = artifacts.require("DappToken");
const DappTokenSale = artifacts.require("DappTokenSale");

module.exports = function(deployer) {
  deployer.deploy(DappToken,1000000).then(function(){
      //Token price is 0.001 ether
      var tokenPrice = 1000000000000000; //in wei and equivalent to 0.001 ether
      return deployer.deploy(DappTokenSale,DappToken.address,tokenPrice);
  });
};
