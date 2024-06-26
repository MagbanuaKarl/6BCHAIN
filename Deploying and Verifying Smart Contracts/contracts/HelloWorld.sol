// SPDX-License-Identifier: MIT

pragma solidity >=0.7.3;

contract HelloWorld {
    event UpdateMessage(string oldStr, string newStr);

    string public message;

    constructor(string memory initMessage){
        message = initMessage;
    }

    function updpate(string memory newMessage) public {
        string memory oldMsg = message;
        message = newMessage;
        emit UpdateMessage(oldMsg, newMessage);
    }
}
