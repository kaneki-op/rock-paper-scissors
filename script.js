//creating getComputerChoice which returns random no. till 3

function getComputerChoice(max) { 
    numbers=Math.floor(Math.random()* max)+1;
    console.log(numbers)
    if (numbers==1) {
        numbers = 'rock';
        console.log(numbers)
        alert("rock")
    }
    else if (numbers==2) {
        numbers = 'paper';
        console.log(numbers);
        alert("paper");
    }
    else {
        numbers = 'scissors';
        console.log(numbers);
        alert("scissors")
    }
}
//getComputerChoice(3)

//creating getHumanChoice function 
// asking user the choice 
// and returning based on their choice

function getHumanChoice() {
    choice = Number(prompt("which one would you like to choose \n 1.rock 2.paper 3.scissors",""));
    console.log(choice)
    if (choice==1) {
        choice = 'rock';
        console.log(choice);
    }
    else if (choice==2) {
        choice = 'paper';
        console.log(choice);
    }
    else if (choice==3) {
        choice = 'scissors';
        console.log(choice);
    }
    else {
        alert("Please Enter from the choice")
    }
}
getHumanChoice()