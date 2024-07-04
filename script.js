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
getComputerChoice(3)