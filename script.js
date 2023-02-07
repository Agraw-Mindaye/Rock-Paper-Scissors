const choices = ['rock', 'paper', 'scissors']


let computerSelection = function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

let playerSelection = function () {
    return prompt("Rock, Paper, Scissors?");
}

function playRound(playerSelection, computerSelection) {

    if (playerSelection.toLowerCase() == "rock") 
    {
        if (computerSelection == "rock")
        {
            console.log("Tie! You both chose 'Rock'")
            return;
        } else if (computerSelection == "paper")
        {
            console.log("You lose :( 'Paper' beats 'Rock'")
            return false;
        }
        else if (computerSelection == "scissors")
        {
            console.log("You win :) 'Rock beats 'Scissors'")
            return true;
        }
    }

    


}

