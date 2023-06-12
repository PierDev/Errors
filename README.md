# Error with sapphire network and hardhat

This is a minimal project to reproduce a bug when using "@oasisprotocol/sapphire-hardhat" in an hardhat project.
The error comes when using 2 (or more) privates keys and try to make signed calls to public view functions.
If the call is with the first account, it works, but with the second, there is the following error:
"ProviderError: invalid signed simulate call query: signer != caller"

Try it yourself (two tesntnet accounts are setup with rose to pay fees):

```shell
npm install
npx hardhat --network sapphire_testnet run scripts/index.ts
```
