let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let x = Math.floor(Math.random() * 3);

    switch (x) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function getHumanChoice() {
    let choice = prompt("User choice?");
    choice = choice.toLowerCase()

    if ((choice === "rock") || (choice === "paper") || (choice === "scissors")) {
        return choice;
    } else {
        return "Invalid choice!";
    }
}

function playRound(humanChoice, computerChoice) {
    // human wins
    if ((humanChoice === "rock") && (computerChoice === "scissors")) {
        humanScore++;
        return "You win! Rock beats Scissors!"
    } else if ((humanChoice === "paper") && (computerChoice === "rock")) {
        humanScore++;
        return "You win! Paper beats Rock!"
    } else if ((humanChoice === "scissors") && (computerChoice === "paper")) {
        humanScore++;
        return "You win! Scissors beat Paper!"
    } 
    // computer wins
    else if ((computerChoice === "rock") && (humanChoice === "scissors")) {
        computerScore++;
        return "You lose! Rock beats Scissors!"
    } else if ((computerChoice === "paper") && (humanChoice === "rock")) {
        computerScore++;
        return "You lose! Paper beats Rock!"
    } else if ((computerChoice === "scissors") && (humanChoice === "paper")) {
        computerScore++;
        return "You lose! Scissors beat Paper!"
    } else {
        return "Draw!"
    }
}

// playing the game
// creating the ui
const choices = document.querySelector("ul");
const rock = document.createElement("button");
rock.textContent = "Rock";

const paper = document.createElement("button");
paper.textContent = "Paper";

const scissors = document.createElement("button");
scissors.textContent = "Scissors";

choices.appendChild(rock);
choices.appendChild(paper);
choices.appendChild(scissors);

function playGame(humanChoice) {
    const computerChoice = getComputerChoice();
    const stats = document.querySelector("div");
    let humanMove = document.createElement("p");
    humanMove.textContent = `Your move: ${humanChoice}`;
    let computerMove = document.createElement("p");
    computerMove.textContent = `Computer's move: ${computerChoice}`;

    let result = document.createElement("h4");
    result.textContent = playRound(humanChoice, computerChoice) + `; Your Score: ${humanScore}; Computer's Score: ${computerScore}`;

    stats.appendChild(humanMove);
    stats.appendChild(computerMove);
    stats.appendChild(result);

    // checking winner
    const win = document.createElement("h3");
    if (humanScore === 5) {
        win.textContent = "You win the game!";
        stats.appendChild(win);
    } else if (computerScore === 5) {
        win.textContent = "Computer wins the game!";
        stats.appendChild(win);
    };
}

rock.addEventListener('click', function() {playGame("rock")});
paper.addEventListener('click', function() {playGame("paper")});
scissors.addEventListener('click', function() {playGame("scissors")});

