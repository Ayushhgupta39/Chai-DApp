const hre = require("hardhat");

async function getBalances(address) {
  const balanceBigInt = await hre.ethers.provider.getBalance(address);
  return hre.ethers.utils.formatEther(balanceBigInt);
}

async function printBalances(addresses) {
  let counter = 0;
  for(const address of addresses) {
    console.log(`Address ${counter} balance: `, await getBalances(address));
    counter += 1; 
  }
}

async function printMemos(memos) {
  for(const memo of memos) {
    const timeStamp = memo.timeStamp;
    const name = memo.name;
    const from = memo.from;
    const message = memo.message;
    console.log(`At ${timeStamp}, name ${name}, address ${from}, message ${message}`);
  }
}

async function main() {
  const [owner, from1, from2, from3] = await hre.ethers.getSigners();
  const chai = await hre.ethers.getContractFactory("Chai");
  const contract = await chai.deploy(); // Instance of contract
  
  await contract.deployed();
  console.log(`Contract Deployed to: ${contract.address}`);

  const addresses = [ owner.address, from1.address, from2.address, from3.address ];

  console.log("Before buying chai: ");
  await printBalances(addresses);

  const amount = { value: hre.ethers.utils.parseEther("1") };
  await contract.connect(from1).buyChai("from1", "Very nice chai", amount);
  await contract.connect(from2).buyChai("from2", "Good Project", amount);
  await contract.connect(from3).buyChai("from3", "Keep up the good work", amount);

  console.log("After buying Chai: ");
  await printBalances(addresses);

  const memos = await contract.getMemos();
  printMemos(memos);
}

// "We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
