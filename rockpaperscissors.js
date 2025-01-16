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
    
    

    
    

    // for (i = 0; i < 5; i++) {
    //     const humanSelection = getHumanChoice();
    //     const computerSelection = getComputerChoice();
    //     console.log(`Your choice: ${humanSelection}`);
    //     console.log(`Computer choice: ${computerSelection}`);
    //     console.log(playRound(humanSelection, computerSelection));
    //     console.log(`Your Score: ${humanScore}`)
    //     console.log(`Computer Score: ${computerScore}`)
    // }
    
    // if (computerScore > humanScore) {
    //     console.log("Computer wins!")
    // } else if (computerScore < humanScore) {
    //     console.log("You win!")
    // } else {
    //     console.log("Draw!")
    // }
}

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

// getting human input and playing
rock.addEventListener('click', function() {console.log(playRound('rock', getComputerChoice()))});
paper.addEventListener('click', function() {console.log(playRound('paper', getComputerChoice()))});
scissors.addEventListener('click', function() {console.log(playRound('scissors', getComputerChoice()))});