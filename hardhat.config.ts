import '@oasisprotocol/sapphire-hardhat';
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";


const fs = require("fs")
const privateKey = fs.readFileSync(".secret").toString()
const privateKey2 = fs.readFileSync(".secret2").toString()

const config: HardhatUserConfig = {
  solidity: "0.8.18",
  networks: {
    sapphire_testnet: {
      chainId: 23295,
      url: "https://testnet.sapphire.oasis.dev",
      accounts: [`0x${privateKey}`, `0x${privateKey2}`]
    }
  },
};

export default config;
