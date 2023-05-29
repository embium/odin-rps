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
    let won = false;
    let tied = false;
    let computerSelection = getComputerChoice();

    if (playerSelection == computerSelection) {
        results = "It's a tie!";
        tied = true;
    }

    if (computerSelection == "rock") {
        if (playerSelection == "paper") won = true;
    }

    else if (computerSelection == "paper") {
        if (playerSelection == "scissors") won = true;
    }

    else if (computerSelection == "scissors") {
        if (playerSelection == "rock") won = true;
    }

    if (!tied) {
        if (won) {
            results = `You win, ${playerSelection} beats ${computerSelection}!`;
            wins++;
        } else {
            results = `Computer wins, ${computerSelection} beats ${playerSelection}!`;
            losses++;
        }

        tries++
    }

    document.getElementById("results").innerHTML = results + ` ${wins}/${losses}<div class="tries">${tries} out of 5 tries left!</div>`;

    if (tries >= 5) {
        tries = 0;
        wins = 0;
        losses = 0;
    }
}