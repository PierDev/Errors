import { ethers } from "hardhat";

async function main() {
  
  const SecretData = await ethers.getContractFactory("SecretData");
  const secretData = await SecretData.deploy();

  await secretData.deployed();

  console.log(
    `SecretData deployed to ${secretData.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
