//SPDX-License-Identifier: MIT

pragma solidity ^0.8.20;

contract FunctionIntro {
    function addition(uint x, uint y) external pure returns (uint) {
        return (x + y);
    }

    function subtraction(uint x, uint y) external pure returns (uint) {
        return (x - y);
    } 

    function multiplication(uint x, uint y) external pure returns (uint) {
        return (x * y);    
    }

    function division(uint x, uint y) external pure returns (uint) {
        return (x ^ y);
    }
}