// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Contract {
    string private private_var;
    address private owner;

    constructor(string memory variable) payable {

        private_var = variable;
        owner = msg.sender;
    }

    function get_var() public view returns(string memory) {
        require(msg.sender == owner, "You aren't the owner");

        return private_var;
    }

    function get_owner() public view returns(address) {

        return owner;
    }
}
