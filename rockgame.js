//function to get computer choice
function getComputerChoice() {
    const options = ["rock", "paper", "scissors"];
const computerChoice = options[Math.floor(Math.random() * options.length)];
return computerChoice;
}

//function to get human choice
function getHumanChoice() {
    const humanChoice = prompt("Open Console to Play \nChoose between rock, paper, or scissors:").toLowerCase();
//error handling without using loop
    if (["rock", "paper", "scissors"].includes(humanChoice)) {
        return humanChoice;
    } else {
        alert("Invalid choice. Please choose rock, paper, or scissors.");
        return getHumanChoice(); 
    }
}

//players score
let humanScore = 0;
let computerScore = 0;




    //logic to play a single round
function playRound(humanChoice, computerChoice) {
    console.log("Your choice:", humanChoice); // For debugging
    console.log("Computer choice:", computerChoice); // For debugging
if (humanChoice === computerChoice) {
    console.log("It's a Tie");
} else if (humanChoice === "rock" && computerChoice === "scissors") {
    console.log("You Won! Rock beats Scissors");
    humanScore++;
} else if (humanChoice === "scissors" && computerChoice === "paper") {
    console.log("You Won! Scissors beats Paper");
    humanScore++;
} else if (humanChoice === "paper" && computerChoice === "rock") {
    console.log("You won! Paper beats Rock");
    humanScore++;
} else if (computerChoice === "rock" && humanChoice === "scissors") {
    console.log("Computer Won! Rock beats Scissors");
    computerScore++;
} else if (computerChoice === "scissors" && humanChoice === "paper") {
    console.log("Computer Won! Scissors beats Paper");
    computerScore++;
} else if (computerChoice === "paper" && humanChoice === "rock") {
    console.log("Computer Won! Paper beats Rock");
    computerScore++;
}
}





// Output final scores (optional)
console.log(`Final Score - You: ${humanScore}, Computer: ${computerScore}`);
if (humanScore > computerScore) {
    console.log("You win the game!");
} else if (computerScore > humanScore) {
    console.log("Computer wins the game!");
} else {
    console.log("It's a tie game!");
}

const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");
const result1 = document.querySelector(".result1");

//button.addEventListener("click", myFunction);
rockBtn.addEventListener("click", playRound() {
    // Output final scores (optional)
console.log(`Final Score - You: ${humanScore}, Computer: ${computerScore}`);
if (humanScore > computerScore) {
    console.log("You win the game!");
} else if (computerScore > humanScore) {
    console.log("Computer wins the game!");
} else {
    console.log("It's a tie game!");
}
});
paperBtn.addEventListener("click", playRound());
scissorsBtn.addEventListener("click", playRound());


//Calling playGame function
playGame();