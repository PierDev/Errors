import { ethers } from "hardhat";

export default async function get_secret(
  contract_address: string,
  owner_address: string
  ) {
  const owner = await ethers.getSigner(owner_address);
  const secretData = await ethers.getContractAt("Contract", contract_address, owner);

  const secret = await secretData.get_var();
  console.log("Secret: ", secret);
}

