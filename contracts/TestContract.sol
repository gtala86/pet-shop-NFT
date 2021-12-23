// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.8.0;

contract TestContract {
    address[16] public arr; //array of ethereum addresses

    // Retrieving the adopters
    function getAdopters() public view returns (address[16] memory) {
        return arr;
    }
}





