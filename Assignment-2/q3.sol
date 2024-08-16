// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract GreetingMessage {
    string private greetingMessage;

    // set greeting message by user
    function setGreetingMessage(string memory sM) public {
        greetingMessage = sM;
    }

    // retrieve/show greeting message
    function getGreetingMessage() public view returns (string memory) {
        return greetingMessage;
    }
}