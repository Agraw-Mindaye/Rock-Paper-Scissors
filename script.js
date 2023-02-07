const choices = ['rock', 'paper', 'scissors']

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {

    if (playerSelection === computerSelection)
    {
        return `It's a tie! you both picked ${playerSelection}`
    } else if (playerSelection === "rock" && computerSelection === "scissors")
    {
        return "You win! Rock beats Scissors";
    }else if (playerSelection === "paper" && computerSelection === "rock") 
    {
        return "You win! Paper beats Rock";
    } else if (playerSelection === "scissors" && computerSelection === "paper") 
    {
        return "You win! Scissors beats Paper";
    } else 
    {
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
    
}



const playerSelection = prompt("Rock, Paper, Scissors?").toLowerCase();
const computerSelection =  getComputerChoice();