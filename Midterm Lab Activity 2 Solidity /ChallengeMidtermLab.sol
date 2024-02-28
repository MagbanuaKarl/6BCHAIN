// SPDX-License-Identifier: MIT
// ------------------------------//
// Magbanua Karl Caniel D        //
// WD-402                        //
// 20737866                      //
// ------------------------------//
pragma solidity ^0.8.20;

contract Ownable {
    // Declare a state variable owner of type address to store the contract owner's address
    address public owner;

    // Define an event OwnershipTransferred with indexed parameters previousOwner and newOwner to emit ownership transfer events
    event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);

    // Implement a constructor to set the owner variable to the address of the contract deployer (msg.sender).
    constructor() {
        owner = msg.sender;
    }

    // Create a modifier onlyOwner to restrict access to functions only to the contract owner.
    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can call this function");
        _;
    }

    // Function to transfer ownership to a new address
    function transferOwnership(address newOwner) public onlyOwner {
        // Ensure that only the current owner can call this function
        require(newOwner != address(0), "Invalid new owner address");
        // Prevent setting the new owner's address to the zero address (address(0))
        require(newOwner != owner, "New owner must be different from the current owner");
        
        emit OwnershipTransferred(owner, newOwner);
        owner = newOwner;
    }
}

contract MyContract is Ownable {
    // Declare a state variable someValue of type uint256
    uint256 public someValue;

    // Implement a function setSomeValue(uint256 newValue) to set the value of someValue
    function setSomeValue(uint256 newValue) public onlyOwner {
        someValue = newValue;
    }
}
