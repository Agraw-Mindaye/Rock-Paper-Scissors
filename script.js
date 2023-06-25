const rockButton = document.querySelector('.rock')
const paperButton = document.querySelector('.paper')
const scissorsButton = document.querySelector('.scissors')
const outcomeDiv = document.querySelector('.outcome')
const playeScore = document.querySelector('.player-score')
const computerScore = document.querySelector('.computer-score')

let playerWins = 0
let computerWins = 0
let ties = 0
let round = 0

function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors']
    return choices[Math.floor(Math.random() * choices.length)]
}

function playRound (playerSelection, computerSelection)  {

    const p = document.createElement('p')

    if (playerSelection == 'rock' && computerSelection == 'scissors' 
        || playerSelection == 'paper' && computerSelection == 'rock' 
        || playerSelection == 'scissors' && computerSelection == 'paper')
    {
        p.innerText = `You won! ${playerSelection} beats ${computerSelection}`
        outcomeDiv.appendChild(p)
        playerWins++
        //return win;
    }
    else if (playerSelection == 'rock' && computerSelection == 'paper' 
        || playerSelection == 'scissors' && computerSelection == 'rock' 
        || playerSelection == 'paper' && computerSelection == 'scissors')
    {
        p.innerText = `You lost :( ${computerSelection} beats ${playerSelection}`
        outcomeDiv.appendChild(p)
        computerWins++
        //return lose;
    }
    else if (playerSelection == computerSelection)
    {
        p.innerText = `You tied! You both picked ${playerSelection}`
        outcomeDiv.appendChild(p)
        ties++
        //return tie;
    } 
     else 
    {
        return "ERROR!: You must choose Rock, Paper or Scissors";
    } 
}

function checkWinner(playerWins, computerWins) {

    console.log(1, playerWins, 2, computerWins)

    if(playerWins == 5)
    {
        const h1 = document.createElement('h1')
        h1.classList.add('Player-Won')
        h1.innerText = `You won ${playerWins} to ${computerWins}, great job!`
        outcomeDiv.appendChild(h1)
    }

    if(computerWins == 5)
    {
        const h1 = document.createElement('h1')
        h1.classList.add('Computer-Won')
        h1.innerText = `You lost ${playerWins} to ${computerWins}, unlucky :(`
        outcomeDiv.appendChild(h1)
    }
}

function checkGameStatus() {

    if(playerWins >= 5 || computerWins >= 5)
    {
        playerWins = 0
        computerWins = 0
        outcomeDiv.innerHTML = ""
    }
}

function scoreCount(playerWins, computerWins) {
    playeScore.innerText = `Player score: ${playerWins}`
    computerScore.innerText = `Computer score: ${computerWins}`
}

rockButton.addEventListener('click', () => {
    checkGameStatus()
    const computerSelection = getComputerChoice()
    const playerSelection = 'rock'
    playRound(playerSelection, computerSelection)
    scoreCount(playerWins, computerWins)
    checkWinner(playerWins, computerWins)
})

paperButton.addEventListener('click', () => {
    checkGameStatus()
    const computerSelection = getComputerChoice()
    const playerSelection = 'paper'
    playRound(playerSelection, computerSelection)
    scoreCount(playerWins, computerWins)
    checkWinner(playerWins, computerWins)
})

scissorsButton.addEventListener('click', () => {
    checkGameStatus()
    const computerSelection = getComputerChoice()
    const playerSelection = 'scissors'
    playRound(playerSelection, computerSelection)
    scoreCount(playerWins, computerWins)
    checkWinner(playerWins, computerWins)
})


const win = "You Win this round!\n -------"
const lose = "You Lose this round!\n -------"
const tie = "This round is a tie!\n -------"




function game() {

    /*for (let i = 0; i < 5; i++) 
    {

        let playerSelection = prompt("Rock, Paper, Scissors?")
        playerSelection = playerSelection.toLowerCase()
        computerSelection = getComputerChoice()

        console.log(playRound(playerSelection, computerSelection))
        round++
    }
    */

    if (playerWins > computerWins)
    {
        return "You have won the game :)\n -------"
    } else if (playerWins < computerWins){
        return "You Lose this game.\n -------"
    }
    else
    {
        return "This game is a tie.\n -------"
    }

}


game()

console.log( "Your final score is " +playerWins +" wins " +computerWins +" loses " + ties + " ties.\n -------")
console.log("You played this game " + round +" times.\n -------\nGame over.")