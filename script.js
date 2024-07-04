//creating getComputerChoice which returns random no. till 3

function getComputerChoice(max) { 
    numbers=Math.floor(Math.random()* max)+1;
    //console.log(numbers)
    if (numbers==1) {
        numbers = 'rock';
    }
    else if (numbers==2) {
        numbers = 'paper';
    }
    else {
        numbers = 'scissors';
    }
}
//getComputerChoice(3)

//creating getHumanChoice function 
// asking user the choice 
// and returning based on their choice

function getHumanChoice() {
    choice = Number(prompt("which one would you like to choose \n 1.rock 2.paper 3.scissors",""));
    //console.log(choice)
    if (choice==1) {
        choice = 'rock';
    }
    else if (choice==2) {
        choice = 'paper';
    }
    else if (choice==3) {
        choice = 'scissors';
    }
    else {
        alert("Please Enter from the choice")
    }
}
//getHumanChoice()
// Declaring score variable and initializing it to 0

let humanScore = 0;
let computerScore = 0;
//console.log(humanScore)

//Creating playRound function which returns winner of the game ie. human or computer

function playRound(getComputerChoice,getHumanChoice) {
    if (numbers=='rock' && choice=='paper') {
        console.log("you entered :",choice);
        console.log("Machine entered :",numbers);
        console.log("You won! paper beats rock");
        humanScore++;
        console.log("HumanScore is:",humanScore);
    }
    else if (numbers=='paper' && choice=='rock') {
        console.log("you entered :",choice);
        console.log("Machine entered :",numbers);
        console.log("You lost! paper beats rock");
        computerScore++;
        console.log("computerScore is:",computerScore);
    }
    else if (numbers=='rock' && choice=='scissors') {
        console.log("you entered :",choice);
        console.log("Machine entered :",numbers);
        console.log("You lose ! rock beats scissors");
        computerScore++;
        console.log("ComputerScore is:",computerScore);
    }
    else if (numbers=='scissors' && choice=='rock') {
        console.log("you entered :",choice);
        console.log("Machine entered :",numbers);
        console.log("You won ! rock beats scissors");
        humanScore++;
        console.log("humanScore is:",humanScore);
    }
    else if (numbers=='paper' && choice=='scissors') {
        console.log("you entered :",choice);
        console.log("Machine entered :",numbers);
        console.log("You won ! scissors beats paper");
        humanScore++;
        console.log("HumanScore is:",humanScore);
    }
    else if (numbers=='scissors' && choice=='paper') {
        console.log("you entered :",choice);
        console.log("Machine entered :",numbers);
        console.log("You lost ! scissors beats paper");
        computerScore++;
        console.log("ComputerScore is:",computerScore);
    }
    else {
        console.log("you entered :",choice);
        console.log("Machine entered :",numbers);
        console.log("Draw")
    }
}
//playRound()
