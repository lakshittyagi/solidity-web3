// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

contract Shop {

  struct student  {
      uint rollNumber;
      string name;
      string email;
      uint class;
      uint age;
  }

  student public lakshit;

  constructor() {
     lakshit.name ="Lakshit";
     lakshit.age = 24;
     lakshit.rollNumber = 100;
     lakshit.class = 12;
     lakshit.email = "lakshit@yopmail.com";
  }


}
