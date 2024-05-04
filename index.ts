#! /usr/bin/env node

import inquirer from "inquirer"
//1 generate num from computer
//2 user input from user
//3 compare user input with computer generated and show result
const randomnum = Math.floor(Math.random()*6+1)
const randomnum1 = Math.floor(Math.random()*6+1)
const randomnum2 = Math.floor(Math.random()*6+1)

console.log("options: " + randomnum + ", " + randomnum1 + ", " + randomnum2);


const answer = await inquirer.prompt([
      
       {
         name: "userGuessnumber",
        type: "number",
        message: "Please gues a number between 1 to 6: ",
       },
]);
if (randomnum == answer.userGuessnumber){
       console.log("congrants! you are write")
}
else {
       console.log("you are  wrong");
       console.log("write answer was "+randomnum );
} 