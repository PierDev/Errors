import { ethers } from "hardhat";

export default async function deploy(owner_address: string): Promise<string> {
  const owner = await ethers.getSigner(owner_address);
  const Contract = await ethers.getContractFactory("Contract");
  const contract = await Contract.connect(owner).deploy("Hello World");

  await contract.deployed();
  console.log("Contract successfuly deployed to: ", contract.address)
  return contract.address;
}

