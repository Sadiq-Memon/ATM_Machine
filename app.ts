#! /usr/bin/env node 


import inquirer from "inquirer";

let myBalance = 10000; //Dollar
let myPin = 2006;

let pinAnswer = await inquirer.prompt([
  {
    name: "Pin",
    message: "Enter Your Pin",
    type: "number",
  },
]);

if (pinAnswer.Pin === myPin) {
  console.log("Correct pin Code!!");

  let operationAnswer = await inquirer.prompt([
    {
      name: "operations",
      message: "Please Select Option",
      type: "list",
      choices: ["Withdraw", "fast Cash", "Check Balance"],
    },
  ]);

  if (operationAnswer.operations === "Withdraw") {
    let amountAns = await inquirer.prompt([
      {
        name: "amount",
        type: "text",
        message: "Select Your Amount",
      },
    ]);

    myBalance -= amountAns.amount;

    if (amountAns.amount > myBalance) {
      console.log("Insufficiant Balance");
    } else {
      console.log(`Your remaining balance is ${myBalance}`);
    }
  } else if (operationAnswer.operations === "fast Cash") {
    let fastCash = await inquirer.prompt([
      {
        name: "Cashoptions",
        type: "list",
        message: "Select Your Payment",
        choices: [1000, 3000, 5000, 8000, 10000],
      },
    ]);
    myBalance -= fastCash.Cashoptions;
    console.log(`Your Remaining Balance Is ${myBalance}`);
  } else {
    console.log(`Your Balance is ${myBalance}`);
  }
} else {
  console.log("Please Enter A Correct Pin");
}
