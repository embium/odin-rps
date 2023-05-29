let tries = 0;
let wins = 0;
let losses = 0;

function getComputerChoice() {
    choices = ["rock", "paper", "scissors"];
    let index = Math.floor(Math.random() * choices.length);
    return choices[index];
}

function playRound(playerSelection) {
    let results;
    tries++

    let computerSelection = getComputerChoice();

    if(playerSelection == computerSelection) results = "It's a tie game!";

    if(computerSelection == "rock") {
        if(playerSelection == "paper") {
            results =`You win, ${playerSelection} beats ${computerSelection}!`;
            wins++;
        }
        if(playerSelection == "scissors") {
            results = `Computer wins, ${computerSelection} beats ${playerSelection}!`;
            losses++;
        }
    }

    else if(computerSelection == "paper") {
        if(playerSelection == "scissors") {
            results = `You win, ${playerSelection} beats ${computerSelection}!`;
            wins++;
        }

        if(playerSelection == "rock") {
            results = `Computer wins, ${computerSelection} beats ${playerSelection}!`;
            losses++;
        }
    }

    else if(computerSelection == "scissors") {
        if(playerSelection == "rock") {
            results = `You win, ${playerSelection} beats ${computerSelection}!`;
            wins++;
        }

        if(playerSelection == "paper") {
            results = `Computer wins, ${computerSelection} beats ${playerSelection}!`;
            losses++;
        }
    }
    
    document.getElementById("results").innerHTML = results + ` ${wins}/${losses}<div class="tries">${tries} out of 5 tries left!</div>`;
    if(tries >= 5) {
        tries = 0;
        wins = 0;
        losses = 0;
    }
}