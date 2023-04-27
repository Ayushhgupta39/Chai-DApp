// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Chai {
    struct Memo {
        string name;
        string message;
        uint timeStamp;
        address from;
    }

    Memo[] memos;
    address payable owner;

    constructor() {
        // 1. msg.sender means the one who will deploy this smart contract(It's myself in this case)
        // will become the owner
        // 2. We will make the msg.sender as it is just a normal address, to make sure the address
        // is able to receive Ether, we have to make it payable.
        owner = payable(msg.sender);
    }

    function buyChai(string memory name, string memory message) public payable {
        require(msg.value > 0, "Payment value should be more than 0 ETH");
        owner.transfer(msg.value);
        memos.push(Memo(name, message, block.timestamp, msg.sender));
    }

    function getMemos() public view returns(Memo[] memory) {
        return memos;
    }
}
