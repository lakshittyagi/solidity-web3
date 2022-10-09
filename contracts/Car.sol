// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

contract Car {
  struct car {
    uint number;
    string model;
    string brand;
  }

   mapping (string => car) public cars;

    constructor(){
        car memory newcar;
        newcar.number = 123;
        newcar.model = "hhhh";
        newcar.brand = "ggg";
        cars["lakshit"] = newcar;
   }

   function addNewCars(string memory carholder, uint number,string memory model,string memory brand) public {
      car memory newcar;
      newcar.number = number;
      newcar.model = model;
      newcar.brand = brand;
      cars[carholder] = newcar;
   }

}
