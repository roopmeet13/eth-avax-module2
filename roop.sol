// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

contract SimpleContract {
    uint public value1;
    uint public value2;

    function setValue1(uint _value) public {
        value1 = _value;
    }

    function setValue2(uint _value) public {
        value2 = _value;
    }
}
