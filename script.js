function getComputerChoice() {
    choices = ["rock", "paper", "scissors"];
    let index = Math.floor(Math.random() * choices.length);
    return choices[index];
}

function playRound(playerSelection) {
    let results;
    let computerSelection = getComputerChoice();

    if(playerSelection == computerSelection) results = "It's a tie game!";

    if(computerSelection == "rock") {
        if(playerSelection == "paper") results =`You win, ${playerSelection} beats ${computerSelection}!`;
        if(playerSelection == "scissors") results = `Computer wins, ${computerSelection} beats ${playerSelection}!`;
    }

    if(computerSelection == "paper") {
        if(playerSelection == "scissors") results = `You win, ${playerSelection} beats ${computerSelection}!`;
        if(playerSelection == "rock") results = `Computer wins, ${computerSelection} beats ${playerSelection}!`;
    }

    if(computerSelection == "scissors") {
        if(playerSelection == "rock") results = `You win, ${playerSelection} beats ${computerSelection}!`;
        if(playerSelection == "paper") results = `Computer wins, ${computerSelection} beats ${playerSelection}!`;
    }

    document.getElementById("results").innerHTML = results;
}