import inquirer from "inquirer"
const randomnumber = Math.floor(Math.random() * 10 + 1);
const answer= await inquirer.prompt([
    {
        name:"userguessednumber",
        type:"number",
        message:"please guess a number between 1-10"

    },

]);

if(answer.userguessednumber === randomnumber){
    console.log("congtratulations you guessed the right number.")
}else {
console.log("you guessed the wrong number")
}