import { expect } from "chai";
import { ethers } from "hardhat";

describe("MazkGang", function () {

  it("Should premint 100 MAZK when we use devMint",async (accounts) => {
      const owner = accounts;

      const Mazk = await ethers.getContractFactory("MazkGang");
      const mazk = await Mazk.deploy(1, 2, 5, 10000);

      await mazk.deployed();

      expect(await mazk.isPreSaleOn()).to.equal(true);
      const devMintTx = await mazk.devMint(100);

      // wait until the transaction is mined
      await devMintTx.wait();
      expect(await mazk.numberMinted()).to.equal(100);
      
  })
});
