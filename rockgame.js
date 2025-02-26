// Function to get computer choice
function getComputerChoice() {
    const options = ["rock", "paper", "scissors"];
    const computerChoice = options[Math.floor(Math.random() * options.length)];
    return computerChoice;
}

// Function to get human choice
function getHumanChoice(choice) {
    // Here, `choice` will be passed directly from the button click event
    return choice;
}

// Players' scores
let humanScore = 0;
let computerScore = 0;

// Logic to play a single round
function playRound(playerChoice) {
    const computerChoice = getComputerChoice();  // Get computer choice
    console.log("Your choice:", playerChoice);  // For debugging
    console.log("Computer choice:", computerChoice);  // For debugging

    let resultMessage = `Player chose: ${playerChoice} <br>Computer chose: ${computerChoice} <br>`;

    if (playerChoice === computerChoice) {
        resultMessage += "It's a Tie!";
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "scissors" && computerChoice === "paper") ||
        (playerChoice === "paper" && computerChoice === "rock")
    ) {
        resultMessage += "You won!";
        humanScore++;
    } else {
        resultMessage += "Computer won!";
        computerScore++;
    }

    // Output final scores
    resultMessage += `<br>Final Score - You: ${humanScore}, Computer: ${computerScore}`;

    if (humanScore > computerScore) {
        resultMessage += "<br>You win the game!";
    } else if (computerScore > humanScore) {
        resultMessage += "<br>Computer wins the game!";
    } else {
        resultMessage += "<br>It's a tie game!";
    }

    // Update the result div with the outcome
    const resultDiv = document.querySelector(".result");
    resultDiv.innerHTML = resultMessage;
}

// Get button elements
const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");

// Add event listeners
rockBtn.addEventListener("click", () => playRound("rock"));
paperBtn.addEventListener("click", () => playRound("paper"));
scissorsBtn.addEventListener("click", () => playRound("scissors"));
