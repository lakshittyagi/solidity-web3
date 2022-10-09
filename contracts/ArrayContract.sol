// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

contract ArrayContract {

    constructor(){
     
   }

  string[] public cars;

  int[] public numbers;

  function setCars(string memory model) public {
      cars.push(model);
  }

    function setNumbers(int number) public {
      numbers.push(number);
  }

  function getAllCars() public view returns (string [] memory){
      return cars;
  }

  function getAllNumbers() public view returns (int[] memory){
      return numbers;
  }

}
