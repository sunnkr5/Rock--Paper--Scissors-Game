// Function to get computer choice
function getComputerChoice() {
    const options = ["rock", "paper", "scissors"];
    const computerChoice = options[Math.floor(Math.random() * options.length)];
    return computerChoice;
}

// Players' scores and rounds
let humanScore = 0;
let computerScore = 0;
let roundsPlayed = 0;
const maxRounds = 5;

// Logic to play a single round
function playRound(playerChoice) {
    const computerChoice = getComputerChoice();  // Get computer choice
    console.log("Your choice:", playerChoice);  // For debugging
    console.log("Computer choice:", computerChoice);  // For debugging

    let resultMessage = `Player chose: ${playerChoice} <br>Computer chose: ${computerChoice} <br>`;

    if (playerChoice === computerChoice) {
        resultMessage += "It's a Tie!<br>";
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "scissors" && computerChoice === "paper") ||
        (playerChoice === "paper" && computerChoice === "rock")
    ) {
        resultMessage += "You won!<br>";
        humanScore++;
    } else {
        resultMessage += "Computer won!<br>";
        computerScore++;
    }

    // Output the current score
    resultMessage += `<br>Current Score - You: ${humanScore}, Computer: ${computerScore}<br><br>`;

    roundsPlayed++;

    if (roundsPlayed >= maxRounds) {
        if (humanScore > computerScore) {
            resultMessage += "After 5 rounds, you win the game!";
        } else if (computerScore > humanScore) {
            resultMessage += "After 5 rounds, computer wins the game!";
        } else {
            resultMessage += "After 5 rounds, it's a tie game!";
        }
        // Disable buttons and show the replay button after 5 rounds
        disableButtons();
        showReplayButton();
    }

    // Update the result div with the outcome
    const resultDiv = document.querySelector(".result");
    resultDiv.innerHTML = resultMessage;
}

// Function to disable buttons after 5 rounds
function disableButtons() {
    const buttons = document.querySelectorAll("button");
    buttons.forEach(button => {
        if (button !== document.querySelector(".replay")) {  // Exclude the Replay button from being disabled
            button.disabled = true;
        }
    });
}

// Function to show the Replay button
function showReplayButton() {
    const replayButton = document.querySelector(".replay");
    replayButton.style.display = "inline-block";  // Show the replay button
}

// Function to reset the game
function resetGame() {
    humanScore = 0;
    computerScore = 0;
    roundsPlayed = 0;

    // Reset the result div
    const resultDiv = document.querySelector(".result");
    resultDiv.innerHTML = "";

    // Hide the Replay button
    const replayButton = document.querySelector(".replay");
    replayButton.style.display = "none";

    // Enable the buttons
    const buttons = document.querySelectorAll("button");
    buttons.forEach(button => {
        button.disabled = false;
    });
}

// Get button elements
const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");
const replayBtn = document.querySelector(".replay");

// Add event listeners for the game buttons
rockBtn.addEventListener("click", () => playRound("rock"));
paperBtn.addEventListener("click", () => playRound("paper"));
scissorsBtn.addEventListener("click", () => playRound("scissors"));

// Add event listener for the replay button
replayBtn.addEventListener("click", resetGame);
