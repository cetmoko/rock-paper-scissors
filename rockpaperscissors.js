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

function playGame() {
    for (i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        console.log(`Your choice: ${humanSelection}`);
        console.log(`Computer choice: ${computerSelection}`);
        console.log(playRound(humanSelection, computerSelection));
        console.log(`Your Score: ${humanScore}`)
        console.log(`Computer Score: ${computerScore}`)
    }
    
    if (computerScore > humanScore) {
        console.log("Computer wins!")
    } else if (computerScore < humanScore) {
        console.log("You win!")
    } else {
        console.log("Draw!")
    }
}

playGame()