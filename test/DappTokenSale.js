const DappTokenSale = artifacts.require("./DappTokenSale.sol");

contract('DappTokenSale',function(accounts){
    var tokenInstance;
    var tokenPrice = 1000000000000000; //in wei

    it("initializes the contract with correct values", function(){
        return DappTokenSale.deployed().then(function(instance){
            tokenInstance = instance;
            return tokenInstance.address;
        }).then(function(address){
            assert.notEqual(address,0x0,"has contract address");
            return tokenInstance.tokenContract();
        }).then(function(address){
            assert.notEqual(address,0x0,"has token contract address");
            return tokenInstance.tokenPrice();
        }).then(function(price){
            assert.equal(price,tokenPrice,"token price is correct")
        })
    });
})
