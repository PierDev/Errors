import deploy from "./deploy";
import get_owner from "./get_owner";
import get_secret from "./get_secret";

function delay(time: number) {
    return new Promise(resolve => setTimeout(resolve, time));
}

async function main() {
  const address1 = "0x1863B8E4FA9d6485dfB45C249766CD89926094dB";
  const address2 = "0x14c50E9D093A4C71a1799264Ce5bd3931D695d33";

  console.log("1) Test with fist private key in hardhat:\n1.1) Deployment");

  const contract_address1 = await deploy(address1);
  await delay(5000);
  console.log("1.2) get_owner");
  await get_owner(contract_address1);
  console.log("1.3) get_secret");
  await get_secret(contract_address1, address1);


  console.log("2) Test with second private key in hardhat:\n1.1) Deployment");

  const contract_address2 = await deploy(address2);
  await delay(5000);
  console.log("2.2) get_owner");
  await get_owner(contract_address2);
  console.log("2.3) get_secret");
  await get_secret(contract_address2, address2);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
