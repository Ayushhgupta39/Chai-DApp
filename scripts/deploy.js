const hre = require("hardhat");

async function getBalances(address) {
  const balanceBigInt = await hre.ethers.provider.getBalance(address);
  return hre.ethers.utils.formatEther(balanceBigInt);
}

async function printBalances(addresses) {
  let counter = 0;
  for(const address of addresses) {
    console.log(`Address ${counter} balance: `, await getBalances(address));
  }
}

async function printMemos(memos) {
  for(const memo of memos) {
    const timeStamp = memo.timestamp;
    const name = memo.name;
    const from = memo.address;
    const message = memo.message;
    console.log(`At ${timeStamp}, name ${name}, address ${from}, message ${message}`);
  }
}

async function main() {

  

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
