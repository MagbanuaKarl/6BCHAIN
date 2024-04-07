async function main() {
    const { ethers } = require("hardhat");
    const HelloWorld = await ethers.getContractFactory("HelloWorld");
  
    console.log("Deploying HelloWorld...");
    const helloWorld = await HelloWorld.deploy("Hello, world!");
    await helloWorld.deployed();
  
    console.log("HelloWorld deployed to:", helloWorld.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });
  