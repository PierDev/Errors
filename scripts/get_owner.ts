import { ethers } from "hardhat";

export default async function get_owner(contract_address: string) {
  
  const secretData = await ethers.getContractAt("Contract", contract_address);

  const owner = await secretData.get_owner();
  
  console.log("Owner: ", owner);
}