//SPDX-License-Identifier: MIT

pragma solidity ^0.8.20;

contract ValueTypes {
    bool public boolean = true;
    uint public uInteger = 123;

    int public integer =123;
    int public minInteger = type(int).min;

    address public  addrss = 0xf15689636571dba322b48E9EC9bA6cFB3DF818e1;
}