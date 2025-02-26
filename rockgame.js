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

// Function to play a single round
function playRound(playerChoice) {
    const computerChoice = getComputerChoice();  // Get computer choice
    let resultMessage = `Player chose: ${playerChoice} <br>Computer chose: ${computerChoice} <br>`;

    // Determine the winner of the round
    if (playerChoice === computerChoice) {
        resultMessage += "It's a Tie!<br>";
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "scissors" && computerChoice === "paper") ||
        (playerChoice === "paper" && computerChoice === "rock")
    ) {
        resultMessage += "You won this round!<br>";
        humanScore++;
    } else {
        resultMessage += "Computer won this round!<br>";
        computerScore++;
    }

    // Update the score and rounds
    roundsPlayed++;

    // Display the score and rounds left
    let scoreMessage = `<br>Score - You: ${humanScore}, Computer: ${computerScore}`;
    let roundsLeftMessage = `<br>Rounds Left: ${maxRounds - roundsPlayed}`;

    resultMessage += scoreMessage + roundsLeftMessage + "<br><br>";

    if (roundsPlayed >= maxRounds) {
        // Determine final game result
        if (humanScore > computerScore) {
            resultMessage += "<br><strong>You win the game!</strong>";
        } else if (computerScore > humanScore) {
            resultMessage += "<br><strong>Computer wins the game!</strong>";
        } else {
            resultMessage += "<br><strong>It's a tie game!</strong>";
        }
        // Disable the game buttons and show the Replay button
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
        if (button !== document.querySelector(".replay")) {
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

    // Reset the result div and score
    const resultDiv = document.querySelector(".result");
    resultDiv.innerHTML = "";

    const scoreDiv = document.querySelector(".score");
    scoreDiv.innerHTML = "";

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
