

function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors']
    return choices[Math.floor(Math.random() * choices.length)];
}


function playRound(playerSelection, computerSelection) {

    if (playerSelection.toLowerCase() == "rock" && computerSelection == "scissors" 
        || playerSelection.toLowerCase() == "paper" && computerSelection == "rock" 
        || playerSelection.toLowerCase() == "scissors" && computerSelection == "paper")
    {
        playerWins++;
        return win;
    }
    else if (playerSelection.toLowerCase() == "rock" && computerSelection == "paper" 
        || playerSelection.toLowerCase() == "scissors" && computerSelection == "rock" 
        || playerSelection.toLowerCase() == "paper" && computerSelection == "scissors")
    {
        computerWins++;
        return lose;
    }
    else if (playerSelection.toLowerCase() == computerSelection)
    {
        ties++
        return tie;
    } 
     else 
    {
        return "ERROR1: You must choose Rock, Paper or Scissors";
     
    } 
    
}


const win="You Win this round!\n -------";
const lose="You Lose this round!\n -------";
const tie= "This round is a tie!\n -------";

let playerWins = 0
let computerWins = 0
let ties = 0
let round = 0

function game() {

    for (let i = 0; i < 5; i++) 
    {

        let playerSelection = prompt("Rock, Paper, Scissors?")
        playerSelection = playerSelection.toLowerCase()
        computerSelection = getComputerChoice()

        console.log(playRound(playerSelection, computerSelection))
        round++
    }

    if (playerWins > computerWins)
    {
        return "You have won the game :)\n -------";
    } else if (playerWins < computerWins){
        return "You Lose this game.\n -------";
    }
    else
    {
        return "This game is a tie.\n -------";
    }

}

game()

console.log( "Your final score is " +playerWins +" wins " +computerWins +" loses " + ties + " ties.\n -------");
console.log("You played this game " + round +" times.\n -------\nGame over.");