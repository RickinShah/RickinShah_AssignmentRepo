// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract User {
    string private name;

    // get name of the user
    function getName() public view returns (string memory){
        return name;
    }

    // retrieve or show the name of user
    function setName(string memory nM) public {
        name = nM;
    }
}